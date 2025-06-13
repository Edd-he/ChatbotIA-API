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
const format_date_1 = require("../../common/utils/format-date");
const gemini_ai_service_1 = require("../../providers/gemini-ai/gemini-ai.service");
const gemini_ai_models_enum_1 = require("../../providers/gemini-ai/interfaces/gemini-ai-models.enum");
const generate_tittle_context_1 = require("./prompts/generate-tittle.context");
let ConversationsService = class ConversationsService {
    constructor(db, ai) {
        this.db = db;
        this.ai = ai;
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
        const where = {
            created_at: {
                ...(start_date ? { gte: start_date } : {}),
                ...(end_date ? { lte: end_date } : {}),
            },
        };
        const [conversations, total] = await Promise.all([
            this.db.conversation.findMany({
                where,
                take: page_size,
                skip,
            }),
            this.db.conversation.count({ where }),
        ]);
        const totalPages = Math.ceil(total / page_size);
        const data = conversations.map((c, i) => {
            return {
                ...c,
                number: i + 1,
                created_at: (0, format_date_1.formatDate)(c.created_at),
                last_run: (0, format_date_1.formatDate)(c.last_run),
                completed_at: (0, format_date_1.formatDate)(c.completed_at),
            };
        });
        return {
            data,
            total,
            totalPages,
        };
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
    async generateTitle({ conversation_id, input }) {
        const conversation = await this.db.conversation.findFirst({
            where: { id: conversation_id },
        });
        if (conversation.title !== null)
            throw new common_1.BadRequestException('El título ya ha sido generado');
        const title = await this.generateTittle(input);
        try {
            await this.db.conversation.update({
                where: {
                    id: conversation_id,
                },
                data: {
                    title,
                },
            });
            return title;
        }
        catch (e) {
            if (e.code)
                throw new prisma_exception_1.PrismaException(e);
            throw new common_1.InternalServerErrorException('Hubo un error al generar el título');
        }
    }
    async update(conversationId, tokens) {
        try {
            await this.db.conversation.update({
                where: {
                    id: conversationId,
                },
                data: {
                    total_runs: {
                        increment: 1,
                    },
                    total_tokens: {
                        increment: tokens,
                    },
                    last_run: new Date(),
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
    async generateTittle(input) {
        const response = await this.ai.getResponse(gemini_ai_models_enum_1.GeminiModels.GEMINI_1_5_FLASH, generate_tittle_context_1.GENERATE_TITLE_CONTEXT, [input]);
        return response;
    }
};
exports.ConversationsService = ConversationsService;
exports.ConversationsService = ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        gemini_ai_service_1.GeminiAIService])
], ConversationsService);
//# sourceMappingURL=conversations.service.js.map