import { Observable } from 'rxjs';
import { GeminiChatRunnerService } from '@modules/gemini-chat-runner/gemini-chat-runner.service';
import { RunsService } from '@modules/runs/runs.service';
import { Message } from './interfaces/chat.interfaces';
export declare class ChatService {
    private readonly geminiRunner;
    private readonly runsService;
    constructor(geminiRunner: GeminiChatRunnerService, runsService: RunsService);
    doStream({ conversation_id, message }: {
        conversation_id: any;
        message: any;
    }): Observable<unknown>;
    getChathistory(converationId: string): Promise<Message[]>;
}
