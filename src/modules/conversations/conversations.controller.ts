import { Controller, Get, Param, Query } from '@nestjs/common'
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params'

import { ConversationsService } from './conversations.service'

@ApiTags('Conversations')
@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Get('get-all-conversations')
  @ApiOperation({
    summary: 'Obtiene todas las conversaciones generadas en el sistema',
  })
  getAllConversations(@Query() query: RangeDateQueryParams) {
    return this.conversationsService.getAll(query)
  }

  @Get(':conversationId/get-conversation')
  @ApiOperation({
    summary: 'Obtiene una conversación junto a sus ejecuciones generadas',
  })
  getConversation(@Param('conversationId', ValidateUUID) id: string) {
    return this.conversationsService.getOneWithRuns(id)
  }

  @Get(':conversationId/get-title')
  @ApiOperation({
    summary: 'Obten el titulo de una conversación',
  })
  getTitle(@Param('conversationId', ValidateUUID) id: string) {
    return this.conversationsService.getOneTitle(id)
  }
}
