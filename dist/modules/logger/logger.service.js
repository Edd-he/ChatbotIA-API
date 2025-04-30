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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../providers/prisma/prisma.service");
const client_1 = require("@prisma/client");
let LoggerService = class LoggerService {
    constructor(db) {
        this.db = db;
    }
    async getAll({ page, page_size }) {
        const pages = page || 1;
        const skip = (pages - 1) * page_size;
        return await this.db.log.findMany({
            skip: skip,
            take: page_size,
        });
    }
    async createEntityLog(user, entity, entity_id) {
        console.log(user);
        try {
            await this.db.log.create({
                data: {
                    user_id: user.id,
                    entity: client_1.Entity.User,
                    action: client_1.Action.CREATE,
                    entity_id: entity_id,
                },
            });
        }
        catch (e) {
            console.log('e');
            console.log(e);
        }
    }
    async updateEntityLog(user, entity, entity_id) {
        try {
            await this.db.log.create({
                data: {
                    user_id: user.id,
                    entity: client_1.Entity.User,
                    action: client_1.Action.UPDATE,
                    entity_id: entity_id,
                },
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteEntityLog(user, entity, entity_id) {
        try {
            await this.db.log.create({
                data: {
                    user_id: user.id,
                    entity: client_1.Entity.User,
                    action: client_1.Action.DELETE,
                    entity_id: entity_id,
                },
            });
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.LoggerService = LoggerService;
exports.LoggerService = LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LoggerService);
//# sourceMappingURL=logger.service.js.map