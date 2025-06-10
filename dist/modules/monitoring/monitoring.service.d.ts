import { PrismaService } from '@providers/prisma/prisma.service';
export declare class MonitoringService {
    private readonly db;
    constructor(db: PrismaService);
    getRunsAnalytics(): Promise<{
        date: string;
        ok: number;
        error: number;
    }[]>;
}
