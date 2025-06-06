import { Module } from '@nestjs/common'
import { ConversationsModule } from '@modules/conversations/conversations.module'
import { RunsModule } from '@modules/runs/runs.module'
import { LoggerModule } from '@modules/logger/logger.module'
import { TopicsModule } from '@modules/topics/topics.module'
import { DocumentsModule } from '@modules/documents/documents.module'

import { OnRunExecuteHandler } from './run-events/on-run-execute'
import { OnEntityArchivedLogHandler } from './logger/on-entity-archived-log.handler'
import { OnEntityCreatedLogHandler } from './logger/on-entity-created-log.handler'
import { OnEntityUpdatedLogHandler } from './logger/on-entity-updated-log.handler'
import { OnDocumentCreateHandler } from './document-events/on-document-create'
import { OnDocumentRemoveHandler } from './document-events/on-document-remove'

@Module({
  providers: [
    OnRunExecuteHandler,
    OnDocumentCreateHandler,
    OnDocumentRemoveHandler,
    OnEntityArchivedLogHandler,
    OnEntityCreatedLogHandler,
    OnEntityUpdatedLogHandler,
  ],
  imports: [
    ConversationsModule,
    RunsModule,
    LoggerModule,
    DocumentsModule,
    TopicsModule,
  ],
})
export class EventsModule {}
