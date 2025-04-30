import { Injectable } from '@nestjs/common';
import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GeminiRunData } from '@providers/gemini-ai/entities/gemini-ai-run.entity';
import {
  RunExecutedEvent,
  RunEvents,
} from '@modules/events/run-events/run-events.interfaces';
import { IGeminiRunError } from '@providers/gemini-ai/interfaces/gemini-ai-error.interface';
import { GeminiModel } from '@providers/gemini-ai/interfaces/gemini-ai-models.enum';
import { ASSISTANT_INSTRUCTION } from './constants/instructions.const';
import { IGeminiRunData } from '@providers/gemini-ai/interfaces/gemini-ai-entity.interface';

@Injectable()
export class GeminiChatRunnerService {
  constructor(
    private readonly gemini: GeminiAIService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  streamResponse(conversation_id: string, query: string): Observable<any> {
    return new Observable((subscriber) => {
      const dataStream = this.gemini.streamQuery(
        query,
        GeminiModel.GEMINI_2_0_FLASH,
        ASSISTANT_INSTRUCTION,
      );

      let previousChunk: any = null;
      let lastChunk: any = null;

      dataStream.subscribe({
        next: (data) => {
          if (previousChunk !== null) {
            subscriber.next(previousChunk);
          }
          previousChunk = data;
          lastChunk = data;
        },
        error: async (e) => {
          const { metadata, error }: IGeminiRunError = JSON.parse(e);
          this.emitOnRunExecutedvent(metadata, conversation_id);
          subscriber.error(error.message);
          subscriber.complete();
        },
        complete: async () => {
          const metadata: IGeminiRunData = JSON.parse(lastChunk);
          this.emitOnRunExecutedvent(metadata, conversation_id);
          subscriber.complete();
        },
      });
    });
  }

  private emitOnRunExecutedvent(
    GeminiRunMetaDataRaw: IGeminiRunData,
    conversation_id: string,
  ) {
    const metadata = Object.assign(new GeminiRunData(), GeminiRunMetaDataRaw);
    const dto = metadata.toCreateDto(conversation_id);

    const runExecutedEvent: RunExecutedEvent = {
      ...dto,
    };

    this.eventEmitter.emit(RunEvents.ON_RUN_EXECUTED_EVENT, runExecutedEvent);
  }
}
