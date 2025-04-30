import { PrismaService } from '@providers/prisma/prisma.service';
import { IUserSession } from '@auth/interfaces/user-session.interface';
import { Entity } from '@prisma/client';
import { PaginatedParamsDto } from '@common/query-params/paginated-params';
export declare class LoggerService {
    private readonly db;
    constructor(db: PrismaService);
    getAll({ page, page_size }: PaginatedParamsDto): Promise<{
        id: number;
        created_at: Date;
        user_id: string;
        action: import(".prisma/client").$Enums.Action;
        entity: import(".prisma/client").$Enums.Entity;
        entity_id: string;
        details: import("@prisma/client/runtime/library").JsonValue | null;
    }[]>;
    createEntityLog(user: IUserSession, entity: Entity, entity_id: string): Promise<void>;
    updateEntityLog(user: IUserSession, entity: Entity, entity_id: string): Promise<void>;
    deleteEntityLog(user: IUserSession, entity: Entity, entity_id: string): Promise<void>;
}
