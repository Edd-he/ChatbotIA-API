import { ConversationsService } from '@modules/conversations/conversations.service'
import { RunsService } from '@modules/runs/runs.service'
import { Injectable } from '@nestjs/common'
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter'
import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service'
import { GeminiModels } from '@providers/gemini-ai/interfaces/gemini-ai-models.enum'

import { RunExecutedEvent, RUN_EVENTS } from './run-events.interfaces'

@Injectable()
export class OnRunExecuteHandler {
  constructor(
    private readonly events: EventEmitter2,
    private readonly runsService: RunsService,
    private readonly conversationsService: ConversationsService,
    private readonly ai: GeminiAIService,
  ) {}

  @OnEvent(RUN_EVENTS.ON_RUN_EXECUTED_EVENT)
  async handleCreated(payload: RunExecutedEvent) {
    const conversation = await this.conversationsService.getOne(
      payload.conversation_id,
    )

    if (!conversation) {
      const title = await this.generateTittle(payload.input)
      await this.conversationsService.create({
        id: payload.conversation_id,
        title,
      })
    }
    await this.runsService.create(payload)

    await this.conversationsService.update(
      payload.conversation_id,
      payload.tokens,
    )
  }

  private async generateTittle(input: string) {
    const response = await this.ai.getResponse(
      GeminiModels.GEMINI_1_5_FLASH,
      `- generarás un título basado en el primer mensaje con el que el usuario inicia una conversación
      - asegúrate de que no tenga más de 90 caracteres
      - el título debe ser un resumen del mensaje del usuario
      - no uses comillas ni dos puntos`,
      [input],
    )

    return response
  }
}
