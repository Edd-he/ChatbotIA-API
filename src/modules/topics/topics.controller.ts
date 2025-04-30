import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { ApiTags } from '@nestjs/swagger';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';

@ApiTags('Topics')
@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post('create-topic')
  createTopic(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.create(createTopicDto);
  }

  @Get('get-all-topics')
  getAllTopics(@Query() query: SearchStatusQueryParamsDto) {
    return this.topicsService.getAll(query);
  }

  @Get(':topicId/get-topic')
  getTopic(@Param('topicId', ValidateUUID) topicId: string) {
    return this.topicsService.getOneWithDocuments(topicId);
  }

  @Patch(':topicId/update-topic')
  updateTopic(
    @Param('topicId', ValidateUUID) topicId: string,
    @Body() updateTopicDto: UpdateTopicDto,
  ) {
    return this.topicsService.update(topicId, updateTopicDto);
  }

  @Delete(':topicId/remove-topic')
  removeTopic(@Param('topicId', ValidateUUID) topicId: string) {
    return this.topicsService.remove(topicId);
  }
}
