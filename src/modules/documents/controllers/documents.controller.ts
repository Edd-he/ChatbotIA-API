import {
  Controller,
  Get,
  Body,
  Delete,
  Param,
  Patch,
  Query,
} from '@nestjs/common'
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe'
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { UpdateDocumentDto } from '../dto/update-document.dto'
import { DocumentsService } from '../documents.service'

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get('get-all-documents')
  @ApiOperation({ summary: 'Obtiene todos los documentos subidos' })
  getAllDocuments(@Query() query: SearchStatusQueryParamsDto) {
    return this.documentsService.getAll(query)
  }

  @Get(':documentId/get-document')
  @ApiOperation({ summary: 'Obtiene un solo documento' })
  getOneDocument(@Param('documentId', ValidateUUID) documentId: string) {
    return this.documentsService.getOne(documentId)
  }

  @Patch(':documentId/update-document')
  @ApiOperation({ summary: 'Actualiza información de un documento' })
  updateDocument(
    @Param('id', ValidateUUID) id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.update(id, updateDocumentDto)
  }

  @Delete(':documentId/remove-document')
  @ApiOperation({ summary: 'Elimina un documento' })
  removeDocument(@Param('documentId', ValidateUUID) documentId: string) {
    return this.documentsService.remove(documentId)
  }
}
