/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common'
import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service'
import { Observable } from 'rxjs'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { GeminiRunData } from '@providers/gemini-ai/entities/gemini-ai-run.entity'
import { IGeminiRunError } from '@providers/gemini-ai/interfaces/gemini-ai-error.interface'
import { GeminiModels } from '@providers/gemini-ai/interfaces/gemini-ai-models.enum'
import { IGeminiRunData } from '@providers/gemini-ai/interfaces/gemini-ai-entity.interface'
import { RunsService } from '@modules/runs/runs.service'
import { IGeminiMessageChat } from '@providers/gemini-ai/interfaces/gemini-ai-historial.interface'
import {
  RunExecutedEvent,
  RUN_EVENTS,
} from '@modules/events/run-events/run-events.interfaces'

import { ASSISTANT_INSTRUCTION } from './prompts/instructions.const'

@Injectable()
export class GeminiChatRunnerService {
  constructor(
    private readonly ai: GeminiAIService,
    private readonly eventEmitter: EventEmitter2,
    private readonly runService: RunsService,
  ) {}

  streamChatResponse(
    conversation_id: string,
    message: string,
  ): Observable<any> {
    return new Observable((subscriber) => {
      this.runService
        .getConversationContext(conversation_id)
        .then((result) => {
          const historial = this.mapRunsToHistory(result)
          const stream = this.ai.streamChatMessage(
            historial,
            message,
            GeminiModels.GEMINI_2_0_FLASH,
            ASSISTANT_INSTRUCTION,
          )

          let previousChunk: any = null
          let lastChunk: any = null

          stream.subscribe({
            next: (data) => {
              if (previousChunk !== null) subscriber.next(previousChunk)

              previousChunk = data
              lastChunk = data
            },
            error: async (e) => {
              const { metadata, error }: IGeminiRunError = JSON.parse(e)
              this.handleRunExecutedEvent(metadata, conversation_id)
              subscriber.error(error)
            },
            complete: async () => {
              const metadata: IGeminiRunData = JSON.parse(lastChunk)
              const title = await this.handleRunExecutedEvent(
                metadata,
                conversation_id,
              )
              subscriber.next(JSON.stringify({ title: title }))
              subscriber.complete()
            },
          })
        })
        .catch((e) => {
          subscriber.error(e)
        })
    })
  }

  private async handleRunExecutedEvent(
    GeminiRunMetaDataRaw: IGeminiRunData,
    conversation_id: string,
  ) {
    const metadata = Object.assign(new GeminiRunData(), GeminiRunMetaDataRaw)
    const dto = metadata.toCreateDto(conversation_id)

    const runExecutedEvent: RunExecutedEvent = {
      ...dto,
    }

    const title = await this.eventEmitter.emitAsync(
      RUN_EVENTS.ON_RUN_EXECUTED_EVENT,
      runExecutedEvent,
    )
    return title
  }

  private mapRunsToHistory(
    runs: {
      input: string
      output: string
    }[],
  ): IGeminiMessageChat[] {
    const historial = runs.flatMap((run) => [
      {
        role: 'user' as const,
        parts: [{ text: run.input }],
      },
      {
        role: 'model' as const,
        parts: [{ text: run.output }],
      },
    ])
    return historial
  }
}
