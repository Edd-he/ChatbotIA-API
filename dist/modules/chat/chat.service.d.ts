import { Observable } from 'rxjs';
import { GeminiChatRunnerService } from '@modules/gemini-chat-runner/gemini-chat-runner.service';
export declare class ChatService {
    private readonly geminiRunner;
    constructor(geminiRunner: GeminiChatRunnerService);
    doStream({ conversation_id, message }: {
        conversation_id: any;
        message: any;
    }): Observable<any>;
}
