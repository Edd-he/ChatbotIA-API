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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../providers/prisma/prisma.service");
const client_1 = require("@prisma/client");
const prisma_exception_1 = require("../../providers/prisma/exceptions/prisma.exception");
const bcrypt = require("bcryptjs");
const uuid_1 = require("../../common/utils/uuid");
const reniec_service_1 = require("../../providers/reniec/reniec.service");
let UsersService = class UsersService {
    constructor(db, reniecService) {
        this.db = db;
        this.reniecService = reniecService;
    }
    async create(createUserDto) {
        const { password, ...rest } = createUserDto;
        const { nombres, apellidoMaterno, apellidoPaterno } = await this.reniecService.getInfoDNI(createUserDto.dni);
        try {
            const newAdmin = await this.db.user.create({
                data: {
                    id: (0, uuid_1.generateUUIDV7)(),
                    name: nombres,
                    last_name: apellidoPaterno + ' ' + apellidoMaterno,
                    password: await bcrypt.hash(password, 10),
                    role: client_1.Role.ADMIN,
                    ...rest,
                },
            });
            return newAdmin;
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al crear el usuario');
        }
    }
    async findAll({ query, page, page_size, status, }) {
        const pages = page || 1;
        const skip = (pages - 1) * page_size;
        return await this.db.user.findMany({
            omit: {
                password: true,
            },
            where: {
                AND: [
                    query
                        ? { name: { contains: query, mode: client_1.Prisma.QueryMode.insensitive } }
                        : {},
                    status !== null && status !== undefined ? { is_active: status } : {},
                ],
                is_archived: false,
            },
            skip: skip,
            take: page_size,
        });
    }
    async getOne(id) {
        return await this.db.user.findFirst({
            omit: {
                password: true,
                is_archived: true,
            },
            where: {
                id,
                is_archived: false,
            },
        });
    }
    async getOneByEmail(email) {
        return await this.db.user.findFirst({
            omit: {
                is_archived: true,
            },
            where: {
                email,
                is_archived: false,
            },
        });
    }
    async update(id, updateUserDto) {
        try {
            const updatedUser = await this.db.user.update({
                where: {
                    id,
                    is_archived: false,
                },
                data: {
                    ...updateUserDto,
                },
            });
            return updatedUser;
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al actualizar el usuario');
        }
    }
    async remove(id) {
        try {
            const archivedUser = await this.db.user.update({
                where: {
                    id,
                    is_archived: false,
                },
                data: {
                    is_active: false,
                    is_archived: true,
                },
            });
            return archivedUser;
        }
        catch (e) {
            if (e.code) {
                throw new prisma_exception_1.PrismaException(e);
            }
            throw new common_1.InternalServerErrorException('Hubo un error al archivar el usuario');
        }
    }
    async verifyDni(dni) {
        return await this.reniecService.getInfoDNI(dni);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        reniec_service_1.ReniecService])
], UsersService);
//# sourceMappingURL=users.service.js.map