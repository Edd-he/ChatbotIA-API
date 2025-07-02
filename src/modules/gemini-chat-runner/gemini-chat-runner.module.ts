import { Module } from '@nestjs/common'
import { RunsModule } from '@modules/runs/runs.module'
import { DocumentsModule } from '@modules/documents/documents.module'

import { GeminiChatRunnerService } from './gemini-chat-runner.service'
@Module({
  providers: [GeminiChatRunnerService],
  exports: [GeminiChatRunnerService],
  imports: [RunsModule, DocumentsModule],
})
export class GeminiChatRunnerModule {}
