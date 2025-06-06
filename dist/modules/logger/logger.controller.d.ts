import { PaginatedParamsDto } from '@common/query-params/paginated-params';
import { LoggerService } from './logger.service';
export declare class LoggerController {
    private readonly logger;
    constructor(logger: LoggerService);
    findAll(query: PaginatedParamsDto): Promise<{
        data: {
            id: number;
            created_at: Date;
            user_id: string;
            action: import(".prisma/client").$Enums.Action;
            entity: import(".prisma/client").$Enums.Entity;
            entity_id: string;
            details: import("@prisma/client/runtime/library").JsonValue | null;
        }[];
        total: number;
        totalPages: number;
    }>;
}
