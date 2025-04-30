import { ConversationsService } from '@modules/conversations/conversations.service';
import { RunsService } from '@modules/runs/runs.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { RunExecutedEvent } from './run-events.interfaces';
export declare class OnRunExecuteHandler {
    private readonly events;
    private readonly runsService;
    private readonly conversationsService;
    constructor(events: EventEmitter2, runsService: RunsService, conversationsService: ConversationsService);
    handleCreated(payload: RunExecutedEvent): Promise<void>;
}
