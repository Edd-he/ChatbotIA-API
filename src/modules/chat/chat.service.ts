import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GeminiChatRunnerService } from '@modules/gemini-chat-runner/gemini-chat-runner.service';

@Injectable()
export class ChatService {
  constructor(private readonly geminiRunner: GeminiChatRunnerService) {}

  doStream({ conversation_id, message }): Observable<any> {
    return this.geminiRunner.streamChatResponse(conversation_id, message);
  }
}
