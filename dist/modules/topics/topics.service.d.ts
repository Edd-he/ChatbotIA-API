import { PrismaService } from '@providers/prisma/prisma.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { Prisma } from '@prisma/client';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
export declare class TopicsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createTopicDto: CreateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    getAll({ page, page_size, status, query }: SearchStatusQueryParamsDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: Prisma.Decimal;
    }[]>;
    getOneWithDocuments(id: string): Promise<{
        documents: {
            description: string;
            id: string;
            created_at: Date;
            name: string;
            tags: string[];
            is_active: boolean;
            is_archived: boolean;
            updated_at: Date;
            url: string;
            topic_id: string;
            size: Prisma.Decimal;
        }[];
    } & {
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    update(id: string, updateTopicDto: UpdateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    updateSizeAndCount(id: string, size: number): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    remove(id: string): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
}
