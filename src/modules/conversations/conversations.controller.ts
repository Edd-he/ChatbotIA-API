import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params'

import { ConversationsService } from './conversations.service'
import { GenerateTitleDto } from './dto/generate-title.dto'

@ApiTags('Conversations')
@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Get('get-all-conversations')
  @ApiOperation({
    summary: 'Obtiene todas las conversaciones generadas en el sistema',
  })
  async getAllConversations(@Query() query: RangeDateQueryParams) {
    return await this.conversationsService.getAll(query)
  }

  @Get(':conversationId/get-conversation')
  @ApiOperation({
    summary: 'Obtiene una conversación junto a sus ejecuciones generadas',
  })
  async getConversation(@Param('conversationId', ValidateUUID) id: string) {
    return await this.conversationsService.getOneWithRuns(id)
  }

  @Post(':conversationId/generate-title')
  @ApiOperation({
    summary: 'Genera un título para la conversación',
  })
  async generateTitle(@Body() generateTitleDto: GenerateTitleDto) {
    return await this.conversationsService.generateTitle(generateTitleDto)
  }
}
