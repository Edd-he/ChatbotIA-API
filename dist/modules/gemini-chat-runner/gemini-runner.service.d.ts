import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class GeminiChatRunnerService {
    private readonly gemini;
    private readonly eventEmitter;
    constructor(gemini: GeminiAIService, eventEmitter: EventEmitter2);
    streamResponse(conversation_id: string, query: string): Observable<any>;
    private emitOnRunExecutedvent;
}
