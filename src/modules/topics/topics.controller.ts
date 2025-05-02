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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';

@ApiTags('Topics')
@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post('create-topic')
  @ApiOperation({ summary: 'Crea un tópico' })
  createTopic(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.create(createTopicDto);
  }

  @Get('get-all-topics')
  @ApiOperation({ summary: 'Obtiene todos los Tópicos' })
  getAllTopics(@Query() query: SearchStatusQueryParamsDto) {
    return this.topicsService.getAll(query);
  }

  @Get(':topicId/get-topic')
  @ApiOperation({ summary: 'Obtiene un solo tópico' })
  getTopic(@Param('topicId', ValidateUUID) topicId: string) {
    return this.topicsService.getOneWithDocuments(topicId);
  }

  @Patch(':topicId/update-topic')
  @ApiOperation({ summary: 'Actualiza la información de un tópico' })
  updateTopic(
    @Param('topicId', ValidateUUID) topicId: string,
    @Body() updateTopicDto: UpdateTopicDto,
  ) {
    return this.topicsService.update(topicId, updateTopicDto);
  }

  @Delete(':topicId/remove-topic')
  @ApiOperation({ summary: 'Archiva un tópico' })
  removeTopic(@Param('topicId', ValidateUUID) topicId: string) {
    return this.topicsService.remove(topicId);
  }
}
