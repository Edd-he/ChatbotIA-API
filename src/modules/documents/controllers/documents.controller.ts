import {
  Controller,
  Get,
  Body,
  Delete,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { DocumentsService } from '../documents.service';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get('get-all-documents')
  getAllDocuments(@Query() query: SearchStatusQueryParamsDto) {
    return this.documentsService.getAll(query);
  }

  @Get(':documentId/get-document')
  getOneDocument(@Param('documentId', ValidateUUID) documentId: string) {
    return this.documentsService.getOne(documentId);
  }

  @Patch(':documentId/update-document')
  updateDocument(
    @Param('id', ValidateUUID) id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.update(id, updateDocumentDto);
  }

  @Delete(':documentId/remove-document')
  removeDocument(@Param('documentId', ValidateUUID) documentId: string) {
    return this.documentsService.remove(documentId);
  }
}
