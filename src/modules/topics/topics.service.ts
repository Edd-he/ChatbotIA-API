/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PrismaService } from '@providers/prisma/prisma.service'
import { PrismaException } from '@providers/prisma/exceptions/prisma.exception'
import { generateUUIDV7 } from '@common/utils/uuid'
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params'
import { Prisma } from '@prisma/client'

import { UpdateTopicDto } from './dto/update-topic.dto'
import { CreateTopicDto } from './dto/create-topic.dto'

@Injectable()
export class TopicsService {
  constructor(private readonly db: PrismaService) {}
  async create(createTopicDto: CreateTopicDto) {
    try {
      const newTopic = await this.db.topic.create({
        data: {
          id: generateUUIDV7(),
          ...createTopicDto,
        },
      })
      if (newTopic) {
        return newTopic
      }
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Hubo un error al crear el nuevo Topico',
      )
    }
  }

  async getAll({ page, page_size, status, query }: SearchStatusQueryParamsDto) {
    const pages = page || 1
    const skip = (pages - 1) * page_size
    return await this.db.topic.findMany({
      where: {
        AND: [
          query
            ? { name: { contains: query, mode: Prisma.QueryMode.insensitive } }
            : {},
          status !== null && status !== undefined ? { is_active: status } : {},
        ],
        is_archived: false,
      },
      take: page_size,
      skip: skip,
    })
  }

  async getOneWithDocuments(id: string) {
    return await this.db.topic.findFirst({
      where: {
        id,
        is_archived: false,
      },
      include: {
        documents: true,
      },
    })
  }

  async update(id: string, updateTopicDto: UpdateTopicDto) {
    try {
      const updatedTopic = await this.db.topic.update({
        where: {
          id,
          is_archived: false,
        },
        data: {
          ...updateTopicDto,
        },
      })
      if (updatedTopic) {
        return updatedTopic
      }
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Hubo un error al actualizar el topico',
      )
    }
  }
  async updateSizeAndCount(id: string, size: number) {
    try {
      const data: any = {}

      if (size < 0) {
        data.total_size = {
          decrement: Math.abs(size),
        }
        data.documents_count = {
          decrement: 1,
        }
      } else {
        data.total_size = {
          increment: size,
        }
        data.documents_count = {
          increment: 1,
        }
      }

      const updatedTopic = await this.db.topic.update({
        where: {
          id,
          is_archived: false,
        },
        data,
      })

      return updatedTopic
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Hubo un error al actualizar el tópico',
      )
    }
  }

  async remove(id: string) {
    try {
      const archivedTopic = await this.db.topic.update({
        where: {
          id,
          is_archived: false,
        },
        data: {
          is_active: false,
          is_archived: true,
        },
      })
      if (archivedTopic) {
        return archivedTopic
      }
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e)
      }
      throw new InternalServerErrorException(
        'Hubo un error al archivar el topico',
      )
    }
  }
}
