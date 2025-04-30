import { LoggerService } from '@modules/logger/logger.service';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Entity } from '@prisma/client';
import { EntityOperationEvent, LoggerEvents } from './logger-events.interfaces';

@Injectable()
export class EntityUpdatedLogHandler {
  constructor(private readonly logger: LoggerService) {}

  @OnEvent(LoggerEvents.USER_UPDATED_EVENT)
  async handleCreated(payload: EntityOperationEvent) {
    const { session, entityId } = payload;
    await this.logger.updateEntityLog(session, Entity.User, entityId);
  }
}
