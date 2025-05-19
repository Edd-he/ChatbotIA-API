import { DocumentsService } from '@modules/documents/documents.service'
import { TopicsService } from '@modules/topics/topics.service'
import { Injectable } from '@nestjs/common'
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter'

import {
  DOCUMENT_EVENTS,
  DocumentCreatedEvent,
} from './document-events.interface'

@Injectable()
export class OnDocumentCreatedHandler {
  constructor(
    private readonly events: EventEmitter2,
    private readonly documentService: DocumentsService,
    private readonly topicService: TopicsService,
  ) {}

  @OnEvent(DOCUMENT_EVENTS.ON_DOCUMENT_CREATED)
  async handleCreated(payload: DocumentCreatedEvent) {
    await this.topicService.updateSizeAndCount(payload.topic_id, payload.size)
  }
}
