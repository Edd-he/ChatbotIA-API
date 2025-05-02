import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
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
    }>;
    getAllTopics(query: SearchStatusQueryParamsDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }[]>;
    getTopic(topicId: string): Promise<{
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
    updateTopic(topicId: string, updateTopicDto: UpdateTopicDto): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }>;
    removeTopic(topicId: string): Promise<{
        description: string | null;
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
    }>;
}
