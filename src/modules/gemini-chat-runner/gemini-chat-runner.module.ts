import { Module } from '@nestjs/common';
import { GeminiChatRunnerService } from './gemini-chat-runner.service';
import { RunsModule } from '@modules/runs/runs.module';
@Module({
  providers: [GeminiChatRunnerService],
  exports: [GeminiChatRunnerService],
  imports: [RunsModule],
})
export class GeminiChatRunnerModule {}
