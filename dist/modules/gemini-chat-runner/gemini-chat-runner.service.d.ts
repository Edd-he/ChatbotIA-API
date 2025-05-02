import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { RunsService } from '@modules/runs/runs.service';
export declare class GeminiChatRunnerService {
    private readonly gemini;
    private readonly eventEmitter;
    private readonly runService;
    constructor(gemini: GeminiAIService, eventEmitter: EventEmitter2, runService: RunsService);
    streamChatResponse(conversation_id: string, message: string): Observable<any>;
    private handleRunExecutedEvent;
    private mapRunsToHistory;
}
