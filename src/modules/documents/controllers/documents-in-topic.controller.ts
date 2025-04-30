import { UseFileInterceptor } from '@common/decorators/file-interceptor.decorator';
import { UploadFile } from '@common/decorators/upload-files.decorator';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDocumentDto } from '../dto/create-document.dto';
import { DocumentsService } from '../documents.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Topics')
@Controller('topics/:topicId/documents')
export class DocumentsInTopicController {
  constructor(private readonly documentsService: DocumentsService) {}
  @UseFileInterceptor()
  @Post('create-document')
  createDocument(
    @Param('topicId', ValidateUUID) topicId: string,
    @Body() createDocumentDto: CreateDocumentDto,
    @UploadFile() file: Express.Multer.File,
  ) {
    createDocumentDto.topic_id = topicId;
    return this.documentsService.create(createDocumentDto, file);
  }

  @Get('get-documents-by-topic')
  getAllDocumentsByTopic(@Param('topicId', ValidateUUID) topicId: string) {
    return this.documentsService.getAllByTopic(topicId);
  }
}
