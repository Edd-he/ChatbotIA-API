import { Injectable } from '@nestjs/common'
import { PrismaService } from '@providers/prisma/prisma.service'
import { IUserSession } from '@auth/interfaces/user-session.interface'
import { Action, Entity } from '@prisma/client'
import { PaginatedParamsDto } from '@common/query-params/paginated-params'

@Injectable()
export class LoggerService {
  constructor(private readonly db: PrismaService) {}

  async getAll({ page, page_size }: PaginatedParamsDto) {
    const pages = page || 1
    const skip = (pages - 1) * page_size

    const [data, total] = await Promise.all([
      this.db.log.findMany({
        skip,
        take: page_size,
      }),
      this.db.log.count(),
    ])

    const totalPages = Math.ceil(total / page_size)

    return {
      data,
      total,
      totalPages,
    }
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
      })
    } catch (e) {
      console.warn(e)
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
      })
    } catch (e) {
      console.warn(e)
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
      })
    } catch (e) {
      console.warn(e)
    }
  }
}
