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
exports.TopicsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const validate_uuid_pipe_1 = require("../../common/pipes/validate-uuid.pipe");
const swagger_1 = require("@nestjs/swagger");
const search_status_query_params_1 = require("../../common/query-params/search-status-query-params");
const topics_service_1 = require("./topics.service");
const create_topic_dto_1 = require("./dto/create-topic.dto");
const update_topic_dto_1 = require("./dto/update-topic.dto");
let TopicsController = class TopicsController {
    constructor(topicsService) {
        this.topicsService = topicsService;
    }
    createTopic(createTopicDto) {
        return this.topicsService.create(createTopicDto);
    }
    getAllTopics(query) {
        return this.topicsService.getAll(query);
    }
    getTopic(topicId) {
        return this.topicsService.getOneWithDocuments(topicId);
    }
    updateTopic(topicId, updateTopicDto) {
        return this.topicsService.update(topicId, updateTopicDto);
    }
    removeTopic(topicId) {
        return this.topicsService.remove(topicId);
    }
};
exports.TopicsController = TopicsController;
__decorate([
    (0, common_1.Post)('create-topic'),
    (0, swagger_1.ApiOperation)({ summary: 'Crea un tópico' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_topic_dto_1.CreateTopicDto]),
    __metadata("design:returntype", void 0)
], TopicsController.prototype, "createTopic", null);
__decorate([
    (0, common_1.Get)('get-all-topics'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene todos los Tópicos' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_params_1.SearchStatusQueryParamsDto]),
    __metadata("design:returntype", void 0)
], TopicsController.prototype, "getAllTopics", null);
__decorate([
    (0, common_1.Get)(':topicId/get-topic'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtiene un solo tópico' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('topicId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TopicsController.prototype, "getTopic", null);
__decorate([
    (0, common_1.Patch)(':topicId/update-topic'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualiza la información de un tópico' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('topicId', validate_uuid_pipe_1.ValidateUUID)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_topic_dto_1.UpdateTopicDto]),
    __metadata("design:returntype", void 0)
], TopicsController.prototype, "updateTopic", null);
__decorate([
    (0, common_1.Delete)(':topicId/remove-topic'),
    (0, swagger_1.ApiOperation)({ summary: 'Archiva un tópico' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('topicId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TopicsController.prototype, "removeTopic", null);
exports.TopicsController = TopicsController = __decorate([
    (0, swagger_1.ApiTags)('Topics'),
    (0, common_1.Controller)('topics'),
    __metadata("design:paramtypes", [topics_service_1.TopicsService])
], TopicsController);
//# sourceMappingURL=topics.controller.js.map