import { DocumentsService } from '@modules/documents/documents.service';
import { TopicsService } from '@modules/topics/topics.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DocumentCreatedEvent } from './document-events.interface';
export declare class OnDocumentCreatedHandler {
    private readonly events;
    private readonly documentService;
    private readonly topicService;
    constructor(events: EventEmitter2, documentService: DocumentsService, topicService: TopicsService);
    handleCreated(payload: DocumentCreatedEvent): Promise<void>;
}
