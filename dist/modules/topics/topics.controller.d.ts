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
        updated_at: Date;
        is_archived: boolean;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    getAllTopics(query: SearchStatusQueryParamsDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    getTopic(topicId: string): Promise<{
        documents: {
            description: string;
            id: string;
            created_at: Date;
            name: string;
            tags: string[];
            topic_id: string;
            is_active: boolean;
            updated_at: Date;
            url: string;
            size: import("@prisma/client/runtime/library").Decimal;
            is_archived: boolean;
        }[];
    } & {
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    updateTopic(topicId: string, updateTopicDto: UpdateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    removeTopic(topicId: string): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
}
