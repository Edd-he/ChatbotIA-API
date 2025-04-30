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
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const validate_uuid_pipe_1 = require("../../common/pipes/validate-uuid.pipe");
const search_status_query_params_1 = require("../../common/query-params/search-status-query-params");
const swagger_1 = require("@nestjs/swagger");
const user_session_decorator_1 = require("../auth/decorators/user-session.decorator");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
const validate_dni_pipe_1 = require("./pipes/validate-dni.pipe");
const event_emitter_1 = require("@nestjs/event-emitter");
const logger_events_interfaces_1 = require("../events/logger/logger-events.interfaces");
let UsersController = class UsersController {
    constructor(usersService, eventEmitter) {
        this.usersService = usersService;
        this.eventEmitter = eventEmitter;
    }
    async createUser(session, createUserDto) {
        const admin = await this.usersService.create(createUserDto);
        this.eventEmitter.emit(logger_events_interfaces_1.LoggerEvents.USER_CREATED_EVENT, {
            session,
            entityId: admin.id,
        });
        return admin;
    }
    async getAllUsers(query) {
        return this.usersService.findAll(query);
    }
    async verifyDni(dni) {
        return this.usersService.verifyDni(dni);
    }
    async getOneUser(userId) {
        return this.usersService.getOne(userId);
    }
    async updateUser(userId, session, updateUserDto) {
        const admin = await this.usersService.update(userId, updateUserDto);
        this.eventEmitter.emit(logger_events_interfaces_1.LoggerEvents.USER_UPDATED_EVENT, {
            session,
            entityId: admin.id,
        });
        return admin;
    }
    async removeUser(userId, session) {
        const admin = await this.usersService.remove(userId);
        this.eventEmitter.emit(logger_events_interfaces_1.LoggerEvents.USER_ARCHIVED_EVENT, {
            session,
            entityId: admin.id,
        });
        return admin;
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('create-user'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, user_session_decorator_1.UserSession)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('get-all-users'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_status_query_params_1.SearchStatusQueryParamsDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)(':userDni/verify-DNI'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('userDni', validate_dni_pipe_1.ValidateDNI)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyDni", null);
__decorate([
    (0, common_1.Get)(':userId/get-user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getOneUser", null);
__decorate([
    (0, common_1.Patch)(':userId/update-user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId', validate_uuid_pipe_1.ValidateUUID)),
    __param(1, (0, user_session_decorator_1.UserSession)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':userId/remove-user'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId', validate_uuid_pipe_1.ValidateUUID)),
    __param(1, (0, user_session_decorator_1.UserSession)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeUser", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, auth_decorator_1.Auth)(['ADMIN', 'SUPER_ADMIN']),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        event_emitter_1.EventEmitter2])
], UsersController);
//# sourceMappingURL=users.controller.js.map