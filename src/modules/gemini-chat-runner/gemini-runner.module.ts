import { Module } from '@nestjs/common';
import { GeminiChatRunnerService } from './gemini-runner.service';
@Module({
  providers: [GeminiChatRunnerService],
  exports: [GeminiChatRunnerService],
})
export class GeminiChatRunnerModule {}
