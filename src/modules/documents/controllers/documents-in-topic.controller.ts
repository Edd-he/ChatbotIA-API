import { UseFileInterceptor } from '@common/decorators/file-interceptor.decorator';
import { UploadFile } from '@common/decorators/upload-files.decorator';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DocumentsService } from '../documents.service';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateDocumentDto } from '../dto/create-document.dto';

@ApiTags('Topics')
@Controller('topics/:topicId/documents')
export class DocumentsInTopicController {
  constructor(private readonly documentsService: DocumentsService) {}

  @UseFileInterceptor()
  @Post('create-document')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        name: {
          type: 'string',
          minLength: 3,
          maxLength: 100,
        },
        description: {
          type: 'string',
        },
        tags: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        is_active: {
          type: 'boolean',
        },
      },
      required: ['name', 'description', 'tags', 'file'],
    },
  })
  @ApiOperation({ summary: 'Crea un documento de cierto tópico' })
  createDocument(
    @Param('topicId', ValidateUUID) topicId: string,
    @Body() createDocumentDto: CreateDocumentDto,
    @UploadFile() file: Express.Multer.File,
  ) {
    createDocumentDto.topic_id = topicId;
    return this.documentsService.create(createDocumentDto, file);
  }

  @Get('get-documents-by-topic')
  @ApiOperation({ summary: 'Obtiene todos los documentos de cierto Tópico' })
  getAllDocumentsByTopic(@Param('topicId', ValidateUUID) topicId: string) {
    return this.documentsService.getAllByTopic(topicId);
  }
}
