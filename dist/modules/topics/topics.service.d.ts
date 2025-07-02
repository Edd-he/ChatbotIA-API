import { PrismaService } from '@providers/prisma/prisma.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { Prisma } from '@prisma/client';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { CreateTopicDto } from './dto/create-topic.dto';
export declare class TopicsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createTopicDto: CreateTopicDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        description: string | null;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    getAll({ page, page_size, status, query }: SearchStatusQueryParamsDto): Promise<{
        data: {
            number: number;
            created_at: string;
            updated_at: string;
            id: string;
            name: string;
            is_active: boolean;
            is_archived: boolean;
            description: string | null;
            documents_count: number;
            total_size: Prisma.Decimal;
        }[];
        total: number;
        totalPages: number;
    }>;
    getAvailables(): Promise<{
        id: string;
        created_at: Date;
        name: string;
        description: string | null;
    }[]>;
    getOne(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        description: string | null;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    getOneWithDocuments(id: string): Promise<{
        documents: {
            id: string;
            created_at: Date;
            updated_at: Date;
            name: string;
            is_active: boolean;
            is_archived: boolean;
            url: string;
            description: string;
            tags: string[];
            topic_id: string;
            size: Prisma.Decimal;
        }[];
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        description: string | null;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    update(id: string, updateTopicDto: UpdateTopicDto): Promise<{
        actualTopic: {
            id: string;
            created_at: Date;
            updated_at: Date;
            name: string;
            is_active: boolean;
            description: string | null;
            documents_count: number;
            total_size: Prisma.Decimal;
        };
        updatedTopic: {
            id: string;
            created_at: Date;
            updated_at: Date;
            name: string;
            is_active: boolean;
            description: string | null;
            documents_count: number;
            total_size: Prisma.Decimal;
        };
    }>;
    updateSizeAndCount(id: string, size: number): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        description: string | null;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        description: string | null;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
}
