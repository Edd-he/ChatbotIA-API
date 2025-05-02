import { Injectable } from '@nestjs/common';
import { PrismaService } from '@providers/prisma/prisma.service';
import { IUserSession } from '@auth/interfaces/user-session.interface';
import { Action, Entity } from '@prisma/client';
import { PaginatedParamsDto } from '@common/query-params/paginated-params';

@Injectable()
export class LoggerService {
  constructor(private readonly db: PrismaService) {}

  async getAll({ page, page_size }: PaginatedParamsDto) {
    const pages = page || 1;
    const skip = (pages - 1) * page_size;
    return await this.db.log.findMany({
      skip: skip,
      take: page_size,
    });
  }

  async createEntityLog(user: IUserSession, entity: Entity, entity_id: string) {
    try {
      await this.db.log.create({
        data: {
          user_id: user.id,
          entity: Entity.User,
          action: Action.CREATE,
          entity_id: entity_id,
        },
      });
    } catch (e) {
      console.log('e');
      console.log(e);
    }
  }

  async updateEntityLog(user: IUserSession, entity: Entity, entity_id: string) {
    try {
      await this.db.log.create({
        data: {
          user_id: user.id,
          entity: Entity.User,
          action: Action.UPDATE,
          entity_id: entity_id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async deleteEntityLog(user: IUserSession, entity: Entity, entity_id: string) {
    try {
      await this.db.log.create({
        data: {
          user_id: user.id,
          entity: Entity.User,
          action: Action.DELETE,
          entity_id: entity_id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}
