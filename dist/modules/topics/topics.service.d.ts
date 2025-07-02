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
        data: {
            number: number;
            created_at: string;
            updated_at: string;
            description: string | null;
            id: string;
            name: string;
            is_active: boolean;
            is_archived: boolean;
            documents_count: number;
            total_size: Prisma.Decimal;
        }[];
        total: number;
        totalPages: number;
    }>;
    getAvailables(): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
    }[]>;
    getOne(id: string): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: Prisma.Decimal;
    }>;
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
        actualTopic: {
            description: string | null;
            id: string;
            created_at: Date;
            name: string;
            is_active: boolean;
            updated_at: Date;
            documents_count: number;
            total_size: Prisma.Decimal;
        };
        updatedTopic: {
            description: string | null;
            id: string;
            created_at: Date;
            name: string;
            is_active: boolean;
            updated_at: Date;
            documents_count: number;
            total_size: Prisma.Decimal;
        };
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
