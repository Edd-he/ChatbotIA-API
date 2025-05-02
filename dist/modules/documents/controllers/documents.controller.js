"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const documents_service_1 = require("../documents.service");
const validate_uuid_pipe_1 = require("../../../common/pipes/validate-uuid.pipe");
const search_status_query_params_1 = require("../../../common/query-params/search-status-query-params");
const update_document_dto_1 = require("../dto/update-document.dto");
const swagger_1 = require("@nestjs/swagger");
let DocumentsController = class DocumentsController {
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    getAllDocuments(query) {
        return this.documentsService.getAll(query);
    }
    getOneDocument(documentId) {
        return this.documentsService.getOne(documentId);
    }
    updateDocument(id, updateDocumentDto) {
        return this.documentsService.update(id, updateDocumentDto);
    }
    removeDocument(documentId) {
        return this.documentsService.remove(documentId);
    }
};
exports.DocumentsController = DocumentsController;
__decorate([
    (0, common_1.Get)('get-all-documents'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene todos los documentos subidos' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_params_1.SearchStatusQueryParamsDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getAllDocuments", null);
__decorate([
    (0, common_1.Get)(':documentId/get-document'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene un solo documento' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('documentId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "getOneDocument", null);
__decorate([
    (0, common_1.Patch)(':documentId/update-document'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza información de un documento' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', validate_uuid_pipe_1.ValidateUUID)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "updateDocument", null);
__decorate([
    (0, common_1.Delete)(':documentId/remove-document'),
    (0, swagger_1.ApiOperation)({ summary: 'Elimina un documento' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('documentId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "removeDocument", null);
exports.DocumentsController = DocumentsController = __decorate([
    (0, swagger_1.ApiTags)('Documents'),
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsController);
//# sourceMappingURL=documents.controller.js.map