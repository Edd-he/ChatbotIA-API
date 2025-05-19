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
exports.DocumentsInTopicController = void 0;
const openapi = require("@nestjs/swagger");
const file_interceptor_decorator_1 = require("../../../common/decorators/file-interceptor.decorator");
const upload_files_decorator_1 = require("../../../common/decorators/upload-files.decorator");
const validate_uuid_pipe_1 = require("../../../common/pipes/validate-uuid.pipe");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const documents_service_1 = require("../documents.service");
const create_document_dto_1 = require("../dto/create-document.dto");
let DocumentsInTopicController = class DocumentsInTopicController {
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    createDocument(topicId, createDocumentDto, file) {
        createDocumentDto.topic_id = topicId;
        return this.documentsService.create(createDocumentDto, file);
    }
    getAllDocumentsByTopic(topicId) {
        return this.documentsService.getAllByTopic(topicId);
    }
};
exports.DocumentsInTopicController = DocumentsInTopicController;
__decorate([
    (0, file_interceptor_decorator_1.UseFileInterceptor)(),
    (0, common_1.Post)('create-document'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
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
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Crea un documento de cierto tópico' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('topicId', validate_uuid_pipe_1.ValidateUUID)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, upload_files_decorator_1.UploadFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_document_dto_1.CreateDocumentDto, Object]),
    __metadata("design:returntype", void 0)
], DocumentsInTopicController.prototype, "createDocument", null);
__decorate([
    (0, common_1.Get)('get-documents-by-topic'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene todos los documentos de cierto Tópico' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('topicId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsInTopicController.prototype, "getAllDocumentsByTopic", null);
exports.DocumentsInTopicController = DocumentsInTopicController = __decorate([
    (0, swagger_1.ApiTags)('Topics'),
    (0, common_1.Controller)('topics/:topicId/documents'),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsInTopicController);
//# sourceMappingURL=documents-in-topic.controller.js.map