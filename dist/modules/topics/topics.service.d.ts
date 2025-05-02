import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { PrismaService } from '@providers/prisma/prisma.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
export declare class TopicsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createTopicDto: CreateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }>;
    getAll({ page, page_size, status, query }: SearchStatusQueryParamsDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }[]>;
    getOneWithDocuments(id: string): Promise<{
        documents: {
            description: string;
            id: string;
            created_at: Date;
            name: string;
            tags: string[];
            is_active: boolean;
            updated_at: Date;
            is_archived: boolean;
            url: string;
            topic_id: string;
        }[];
    } & {
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }>;
    update(id: string, updateTopicDto: UpdateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }>;
    remove(id: string): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }>;
}
