import { ConversationsService } from '@modules/conversations/conversations.service';
import { RunsService } from '@modules/runs/runs.service';
import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { RunExecutedEvent, RunEvents } from './run-events.interfaces';

@Injectable()
export class OnRunExecuteHandler {
  constructor(
    private readonly events: EventEmitter2,
    private readonly runsService: RunsService,
    private readonly conversationsService: ConversationsService,
  ) {}

  @OnEvent(RunEvents.ON_RUN_EXECUTED_EVENT)
  async handleCreated(payload: RunExecutedEvent) {
    const conversation = await this.conversationsService.getOne(
      payload.conversation_id,
    );

    if (!conversation) {
      await this.conversationsService.create({ id: payload.conversation_id });
    }
    await this.runsService.create(payload);

    await this.conversationsService.updateTotalTokens(
      payload.conversation_id,
      payload.tokens,
    );
  }
}
