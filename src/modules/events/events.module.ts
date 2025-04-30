import { Module } from '@nestjs/common';
import { ConversationsModule } from '@modules/conversations/conversations.module';
import { RunsModule } from '@modules/runs/runs.module';
import { OnRunExecuteHandler } from './run-events/on-run-execute';
import { LoggerModule } from '@modules/logger/logger.module';
import { EntityArchivedLogHandler } from './logger/entity-archived-log.handler';
import { EntityCreatedLogHandler } from './logger/entity-created-log.handler';
import { EntityUpdatedLogHandler } from './logger/entity-updated-log.handler';

@Module({
  providers: [
    OnRunExecuteHandler,
    EntityArchivedLogHandler,
    EntityCreatedLogHandler,
    EntityUpdatedLogHandler,
  ],
  imports: [ConversationsModule, RunsModule, LoggerModule],
})
export class EventsModule {}
