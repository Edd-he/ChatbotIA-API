import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
export declare class TopicsController {
    private readonly topicsService;
    constructor(topicsService: TopicsService);
    createTopic(createTopicDto: CreateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    getAllTopics(query: SearchStatusQueryParamsDto): Promise<{
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
            total_size: import("@prisma/client/runtime/library").Decimal;
        }[];
        total: number;
        totalPages: number;
    }>;
    getTopic(topicId: string): Promise<{
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
            size: import("@prisma/client/runtime/library").Decimal;
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
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    updateTopic(topicId: string, updateTopicDto: UpdateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    removeTopic(topicId: string): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
}
