import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PrismaService } from 'src/providers/prisma/prisma.service'
import { PrismaException } from 'src/providers/prisma/exceptions/prisma.exception'
import { generateUUIDV7 } from '@common/utils/uuid'
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params'

import { CreateRunDto } from './dto/create-run.dto'
@Injectable()
export class RunsService {
  constructor(private readonly db: PrismaService) {}

  async create(createRunDto: CreateRunDto) {
    try {
      const run = await this.db.run.create({
        data: {
          id: generateUUIDV7(),
          ...createRunDto,
        },
      })

      return run
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Ocurrio un error inesperado al registrar la ejecución',
      )
    }
  }

  async getAll({
    start_date,
    end_date,
    page,
    page_size,
  }: RangeDateQueryParams) {
    const pages = page || 1
    const skip = (pages - 1) * page_size
    return await this.db.run.findMany({
      where: {
        created_at: {
          ...(start_date ? { gte: start_date } : {}),
          ...(end_date ? { lte: end_date } : {}),
        },
      },
      skip: skip,
      take: page_size,
    })
  }

  async getAllByConversation(conversationId: string) {
    return await this.db.run.findMany({
      where: {
        conversation_id: conversationId,
      },
    })
  }

  async getOne(runId: string) {
    return await this.db.run.findFirst({
      where: {
        id: runId,
      },
    })
  }
}
