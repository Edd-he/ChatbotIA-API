import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { GeminiChatRunnerModule } from '@modules/gemini-chat-runner/gemini-runner.module';
@Module({
  imports: [GeminiChatRunnerModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
