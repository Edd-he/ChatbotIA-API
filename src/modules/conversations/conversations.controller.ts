import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';

@ApiTags('Conversations')
@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Get('get-all-conversations')
  @ApiOperation({
    summary: 'Obtiene todas las conversaciones generadas en el sistema',
  })
  getAllConversations(@Query() query: RangeDateQueryParams) {
    return this.conversationsService.getAll(query);
  }

  @Get(':conversationId/get-conversation')
  @ApiOperation({
    summary: 'Obtiene una conversación junto a sus ejecuciones generadas',
  })
  getConversation(@Param('conversationId', ValidateUUID) id: string) {
    return this.conversationsService.getOneWithRuns(id);
  }
}
