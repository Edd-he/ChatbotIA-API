import { Global, Module } from '@nestjs/common';
import { GeminiAIService } from './gemini-ai.service';
import { HttpModule } from '@nestjs/axios';
import { GeminiProvider } from './gemini-ai.provider';

@Global()
@Module({
  imports: [HttpModule],
  providers: [GeminiAIService, GeminiProvider],
  exports: [GeminiAIService],
})
export class GeminiAIModule {}
