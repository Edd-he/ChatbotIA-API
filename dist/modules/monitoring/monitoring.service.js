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
exports.MonitoringService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../providers/prisma/prisma.service");
let MonitoringService = class MonitoringService {
    constructor(db) {
        this.db = db;
    }
    async getRunsAnalytics() {
        const start = new Date(new Date().getFullYear(), 0, 1);
        const end = new Date();
        const runs = await this.db.run.findMany({
            where: {
                created_at: {
                    gte: start,
                    lte: end,
                },
            },
            select: {
                created_at: true,
                is_run_successful: true,
            },
        });
        const summary = new Map();
        for (const run of runs) {
            const date = run.created_at.toISOString().split('T')[0];
            if (!summary.has(date)) {
                summary.set(date, { ok: 0, error: 0 });
            }
            const entry = summary.get(date);
            if (run.is_run_successful) {
                entry.ok++;
            }
            else {
                entry.error++;
            }
        }
        const result = [];
        const current = new Date(start);
        while (current <= end) {
            const date = current.toISOString().split('T')[0];
            const counts = summary.get(date) ?? { ok: 0, error: 0 };
            result.push({ date, ...counts });
            current.setDate(current.getDate() + 1);
        }
        return result;
    }
};
exports.MonitoringService = MonitoringService;
exports.MonitoringService = MonitoringService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MonitoringService);
//# sourceMappingURL=monitoring.service.js.map