import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GeminiChatRunnerService } from '@modules/gemini-chat-runner/gemini-runner.service';

@Injectable()
export class ChatService {
  constructor(private readonly geminiRunner: GeminiChatRunnerService) {}

  doStreamGemini({ conversation_id, query }): Observable<any> {
    return this.geminiRunner.streamResponse(conversation_id, query);
  }
}
