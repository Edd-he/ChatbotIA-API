import { Module } from '@nestjs/common'
import { RunsModule } from '@modules/runs/runs.module'

import { GeminiChatRunnerService } from './gemini-chat-runner.service'
@Module({
  providers: [GeminiChatRunnerService],
  exports: [GeminiChatRunnerService],
  imports: [RunsModule],
})
export class GeminiChatRunnerModule {}
