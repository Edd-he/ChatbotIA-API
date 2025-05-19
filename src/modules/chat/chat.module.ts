import { Module } from '@nestjs/common'
import { GeminiChatRunnerModule } from '@modules/gemini-chat-runner/gemini-chat-runner.module'

import { ChatService } from './chat.service'
import { ChatController } from './chat.controller'
@Module({
  imports: [GeminiChatRunnerModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
