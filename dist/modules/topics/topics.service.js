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
exports.TopicsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../providers/prisma/prisma.service");
const prisma_exception_1 = require("../../providers/prisma/exceptions/prisma.exception");
const uuid_1 = require("../../common/utils/uuid");
const client_1 = require("@prisma/client");
let TopicsService = class TopicsService {
    constructor(db) {
        this.db = db;
    }
    async create(createTopicDto) {
        try {
            const newTopic = await this.db.topic.create({
                data: {
                    id: (0, uuid_1.generateUUIDV7)(),
                    ...createTopicDto,
                },
            });
            if (newTopic) {
                return newTopic;
            }
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al crear el nuevo Topico');
        }
    }
    async getAll({ page, page_size, status, query }) {
        const pages = page || 1;
        const skip = (pages - 1) * page_size;
        return await this.db.topic.findMany({
            where: {
                AND: [
                    query
                        ? { name: { contains: query, mode: client_1.Prisma.QueryMode.insensitive } }
                        : {},
                    status !== null && status !== undefined ? { is_active: status } : {},
                ],
                is_archived: false,
            },
            take: page_size,
            skip: skip,
        });
    }
    async getOneWithDocuments(id) {
        return await this.db.topic.findFirst({
            where: {
                id,
                is_archived: false,
            },
            include: {
                documents: true,
            },
        });
    }
    async update(id, updateTopicDto) {
        try {
            const updatedTopic = await this.db.topic.update({
                where: {
                    id,
                    is_archived: false,
                },
                data: {
                    ...updateTopicDto,
                },
            });
            if (updatedTopic) {
                return updatedTopic;
            }
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al actualizar el topico');
        }
    }
    async remove(id) {
        try {
            const archivedTopic = await this.db.topic.update({
                where: {
                    id,
                    is_archived: false,
                },
                data: {
                    is_active: false,
                    is_archived: true,
                },
            });
            if (archivedTopic) {
                return archivedTopic;
            }
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al archivar el topico');
        }
    }
};
exports.TopicsService = TopicsService;
exports.TopicsService = TopicsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TopicsService);
//# sourceMappingURL=topics.service.js.map