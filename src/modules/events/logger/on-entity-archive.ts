import { LoggerService } from '@modules/logger/logger.service'
import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { Entity } from '@prisma/client'

import { EntityOperationEvent, LoggerEvents } from './logger-events.interfaces'

@Injectable()
export class OnEntityArchiveHandler {
  constructor(private readonly logger: LoggerService) {}

  @OnEvent(LoggerEvents.USER_ARCHIVED_EVENT)
  async handleCreated(payload: EntityOperationEvent) {
    const { session, entityId } = payload
    await this.logger.deleteEntityLog(session, Entity.User, entityId)
  }
}
