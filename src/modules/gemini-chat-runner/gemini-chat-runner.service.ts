import { Injectable } from '@nestjs/common';
import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GeminiRunData } from '@providers/gemini-ai/entities/gemini-ai-run.entity';
import { IGeminiRunError } from '@providers/gemini-ai/interfaces/gemini-ai-error.interface';
import { GeminiModels } from '@providers/gemini-ai/interfaces/gemini-ai-models.enum';
import { ASSISTANT_INSTRUCTION } from './constants/instructions.const';
import { IGeminiRunData } from '@providers/gemini-ai/interfaces/gemini-ai-entity.interface';
import { RunsService } from '@modules/runs/runs.service';
import { Run } from '@prisma/client';
import { IGeminiMessageChat } from '@providers/gemini-ai/interfaces/gemini-ai-historial.interface';
import {
  RunExecutedEvent,
  RunEvents,
} from '@modules/events/run-events/run-events.interfaces';

@Injectable()
export class GeminiChatRunnerService {
  constructor(
    private readonly gemini: GeminiAIService,
    private readonly eventEmitter: EventEmitter2,
    private readonly runService: RunsService,
  ) {}

  streamChatResponse(
    conversation_id: string,
    message: string,
  ): Observable<any> {
    return new Observable((subscriber) => {
      this.runService
        .getAllByConversation(conversation_id)
        .then((result) => {
          const historial = this.mapRunsToHistory(result);
          const stream = this.gemini.streamChatMessage(
            historial,
            message,
            GeminiModels.GEMINI_2_0_FLASH,
            ASSISTANT_INSTRUCTION,
          );

          let previousChunk: any = null;
          let lastChunk: any = null;

          stream.subscribe({
            next: (data) => {
              if (previousChunk !== null) subscriber.next(previousChunk);

              previousChunk = data;
              lastChunk = data;
            },
            error: async (e) => {
              const { metadata, error }: IGeminiRunError = JSON.parse(e);
              this.handleRunExecutedEvent(metadata, conversation_id);
              subscriber.error(error);
            },
            complete: async () => {
              const metadata: IGeminiRunData = JSON.parse(lastChunk);
              this.handleRunExecutedEvent(metadata, conversation_id);
              subscriber.complete();
            },
          });
        })
        .catch((e) => {
          subscriber.error(e);
        });
    });
  }

  private handleRunExecutedEvent(
    GeminiRunMetaDataRaw: IGeminiRunData,
    conversation_id: string,
  ) {
    const metadata = Object.assign(new GeminiRunData(), GeminiRunMetaDataRaw);
    const dto = metadata.toCreateDto(conversation_id);

    const runExecutedEvent: RunExecutedEvent = {
      ...dto,
    };

    this.eventEmitter.emit(RunEvents.ON_RUN_EXECUTED_EVENT, runExecutedEvent);
  }

  private mapRunsToHistory(runs: Run[]): IGeminiMessageChat[] {
    const historial = runs.flatMap((run) => [
      {
        role: 'user' as const,
        parts: [{ text: run.input }],
      },
      {
        role: 'model' as const,
        parts: [{ text: run.output }],
      },
    ]);
    return historial;
  }
}
