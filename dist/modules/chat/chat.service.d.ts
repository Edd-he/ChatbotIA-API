import { Observable } from 'rxjs';
import { GeminiChatRunnerService } from '@modules/gemini-chat-runner/gemini-runner.service';
export declare class ChatService {
    private readonly geminiRunner;
    constructor(geminiRunner: GeminiChatRunnerService);
    doStreamGemini({ conversation_id, query }: {
        conversation_id: any;
        query: any;
    }): Observable<any>;
}
