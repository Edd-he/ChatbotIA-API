import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { PrismaException } from 'src/providers/prisma/exceptions/prisma.exception';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';

@Injectable()
export class ConversationsService {
  constructor(private readonly db: PrismaService) {}
  async create(createConversationDto: CreateConversationDto) {
    try {
      const newConversation = await this.db.conversation.create({
        data: {
          ...createConversationDto,
        },
      });
      if (newConversation) return newConversation;
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e);
      }
      throw new InternalServerErrorException(
        'Hubo un error al crear la conversación',
      );
    }
  }

  async getAll({
    page,
    page_size,
    start_date,
    end_date,
  }: RangeDateQueryParams) {
    const pages = page || 1;
    const skip = (pages - 1) * page_size;
    return await this.db.conversation.findMany({
      where: {
        created_at: {
          ...(start_date ? { gte: start_date } : {}),
          ...(end_date ? { lte: end_date } : {}),
        },
      },
      take: page_size,
      skip: skip,
    });
  }

  async getOneWithRuns(id: string) {
    return await this.db.conversation.findFirst({
      where: {
        id,
      },
      include: {
        runs: true,
      },
    });
  }

  async getOne(conversationId: string) {
    return await this.db.conversation.findFirst({
      where: {
        id: conversationId,
      },
    });
  }

  async updateTotalTokens(conversationId: string, tokens: number) {
    try {
      await this.db.conversation.update({
        where: {
          id: conversationId,
        },
        data: {
          total_tokens: {
            increment: tokens,
          },
        },
      });
    } catch (e) {
      if (e.code) {
        throw new PrismaException(e);
      }

      throw new InternalServerErrorException(
        'Hubo un error al actualizar los tokens',
      );
    }
  }
}
