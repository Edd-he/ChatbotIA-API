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
exports.ConversationsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const conversations_service_1 = require("./conversations.service");
const validate_uuid_pipe_1 = require("../../common/pipes/validate-uuid.pipe");
const swagger_1 = require("@nestjs/swagger");
const rangeDate_query_params_1 = require("../../common/query-params/rangeDate-query-params");
let ConversationsController = class ConversationsController {
    constructor(conversationsService) {
        this.conversationsService = conversationsService;
    }
    getAllConversations(query) {
        return this.conversationsService.getAll(query);
    }
    getConversation(id) {
        return this.conversationsService.getOneWithRuns(id);
    }
};
exports.ConversationsController = ConversationsController;
__decorate([
    (0, common_1.Get)('get-all-conversations'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rangeDate_query_params_1.RangeDateQueryParams]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "getAllConversations", null);
__decorate([
    (0, common_1.Get)(':conversationId/get-conversation'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('conversationId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "getConversation", null);
exports.ConversationsController = ConversationsController = __decorate([
    (0, swagger_1.ApiTags)('Conversations'),
    (0, common_1.Controller)('conversations'),
    __metadata("design:paramtypes", [conversations_service_1.ConversationsService])
], ConversationsController);
//# sourceMappingURL=conversations.controller.js.map