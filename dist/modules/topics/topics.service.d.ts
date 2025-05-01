import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { PrismaService } from '@providers/prisma/prisma.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
export declare class TopicsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createTopicDto: CreateTopicDto): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }>;
    getAll({ page, page_size, status, query }: SearchStatusQueryParamsDto): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }[]>;
    getOneWithDocuments(id: string): Promise<{
        documents: {
            is_active: boolean;
            description: string;
            id: string;
            created_at: Date;
            updated_at: Date;
            name: string;
            is_archived: boolean;
            topic_id: string;
            tags: string[];
            url: string;
        }[];
    } & {
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }>;
    update(id: string, updateTopicDto: UpdateTopicDto): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }>;
    remove(id: string): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }>;
}
