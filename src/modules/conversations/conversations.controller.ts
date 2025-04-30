import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { ApiTags } from '@nestjs/swagger';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';

@ApiTags('Conversations')
@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Get('get-all-conversations')
  getAllConversations(@Query() query: RangeDateQueryParams) {
    return this.conversationsService.getAll(query);
  }

  @Get(':conversationId/get-conversation')
  getConversation(@Param('conversationId', ValidateUUID) id: string) {
    return this.conversationsService.getOneWithRuns(id);
  }
}
