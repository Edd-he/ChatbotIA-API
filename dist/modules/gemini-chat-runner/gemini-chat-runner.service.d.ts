import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service';
import { Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { RunsService } from '@modules/runs/runs.service';
import { DocumentsService } from '@modules/documents/documents.service';
export declare class GeminiChatRunnerService {
    private readonly ai;
    private readonly eventEmitter;
    private readonly runService;
    private readonly documentService;
    constructor(ai: GeminiAIService, eventEmitter: EventEmitter2, runService: RunsService, documentService: DocumentsService);
    streamChatResponse(conversation_id: string, message: string, topic_id?: string): Observable<any>;
    private handleRunExecutedEvent;
    private mapRunsToHistory;
    private extractDocumentsContext;
}
