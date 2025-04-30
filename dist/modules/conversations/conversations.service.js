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
exports.ConversationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../providers/prisma/prisma.service");
const prisma_exception_1 = require("../../providers/prisma/exceptions/prisma.exception");
let ConversationsService = class ConversationsService {
    constructor(db) {
        this.db = db;
    }
    async create(createConversationDto) {
        try {
            const newConversation = await this.db.conversation.create({
                data: {
                    ...createConversationDto,
                },
            });
            if (newConversation)
                return newConversation;
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al crear la conversación');
        }
    }
    async getAll({ page, page_size, start_date, end_date, }) {
        const pages = page || 1;
        const skip = (pages - 1) * page_size;
        return await this.db.conversation.findMany({
            where: {
                created_at: {
                    ...(start_date ? { gte: start_date } : {}),
                    ...(end_date ? { lte: end_date } : {}),
                },
            },
            take: page_size,
            skip: skip,
        });
    }
    async getOneWithRuns(id) {
        return await this.db.conversation.findFirst({
            where: {
                id,
            },
            include: {
                runs: true,
            },
        });
    }
    async getOne(conversationId) {
        return await this.db.conversation.findFirst({
            where: {
                id: conversationId,
            },
        });
    }
    async updateTotalTokens(conversationId, tokens) {
        try {
            await this.db.conversation.update({
                where: {
                    id: conversationId,
                },
                data: {
                    total_tokens: {
                        increment: tokens,
                    },
                },
            });
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al actualizar los tokens');
        }
    }
};
exports.ConversationsService = ConversationsService;
exports.ConversationsService = ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConversationsService);
//# sourceMappingURL=conversations.service.js.map