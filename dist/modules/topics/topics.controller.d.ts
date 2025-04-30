import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
export declare class TopicsController {
    private readonly topicsService;
    constructor(topicsService: TopicsService);
    createTopic(createTopicDto: CreateTopicDto): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }>;
    getAllTopics(query: SearchStatusQueryParamsDto): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }[]>;
    getTopic(topicId: string): Promise<{
        documents: {
            is_active: boolean;
            description: string;
            id: string;
            created_at: Date;
            updated_at: Date;
            name: string;
            is_archived: boolean;
            url: string;
            tags: string[];
            topic_id: string;
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
    updateTopic(topicId: string, updateTopicDto: UpdateTopicDto): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }>;
    removeTopic(topicId: string): Promise<{
        is_active: boolean;
        description: string | null;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
    }>;
}
