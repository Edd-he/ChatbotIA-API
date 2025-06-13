import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PrismaService } from 'src/providers/prisma/prisma.service'
import { PrismaException } from 'src/providers/prisma/exceptions/prisma.exception'
import { generateUUIDV7 } from '@common/utils/uuid'
import { formatDate } from '@common/utils/format-date'

import { CreateRunDto } from './dto/create-run.dto'
import { RunQueryParams } from './query-params/runs-query-params'
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
    page = 1,
    page_size,
    error,
  }: RunQueryParams) {
    const skip = (page - 1) * page_size

    const where: any = {
      created_at: {
        ...(start_date ? { gte: start_date } : {}),
        ...(end_date ? { lte: end_date } : {}),
      },
    }

    if (error !== undefined && error !== null) {
      where.is_run_successful = !error
    }

    const [runs, total] = await Promise.all([
      this.db.run.findMany({
        where,
        skip,
        take: page_size,
      }),
      this.db.run.count({ where }),
    ])

    const totalPages = Math.ceil(total / page_size)

    const data = runs.map((r, i) => ({
      ...r,
      number: i + 1,
      created_at: formatDate(r.created_at),
    }))

    return {
      data,
      total,
      totalPages,
    }
  }

  async getAllByConversation(conversationId: string) {
    return await this.db.run.findMany({
      where: {
        conversation_id: conversationId,
      },
    })
  }

  async getConversationContext(conversationId: string) {
    return await this.db.run.findMany({
      where: {
        conversation_id: conversationId,
      },
      select: { input: true, output: true },
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
