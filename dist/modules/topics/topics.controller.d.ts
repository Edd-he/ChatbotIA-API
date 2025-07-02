import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { IUserSession } from '@modules/auth/interfaces/user-session.interface';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
export declare class TopicsController {
    private readonly topicsService;
    private readonly eventEmitter;
    constructor(topicsService: TopicsService, eventEmitter: EventEmitter2);
    createTopic(session: IUserSession, createTopicDto: CreateTopicDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        description: string | null;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    getAllTopics(query: SearchStatusQueryParamsDto): Promise<{
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
            total_size: import("@prisma/client/runtime/library").Decimal;
        }[];
        total: number;
        totalPages: number;
    }>;
    getAvailableTopics(): Promise<{
        id: string;
        created_at: Date;
        name: string;
        description: string | null;
    }[]>;
    getTopic(topicId: string): Promise<{
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
            size: import("@prisma/client/runtime/library").Decimal;
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
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    updateTopic(session: IUserSession, topicId: string, updateTopicDto: UpdateTopicDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        description: string | null;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
    removeTopic(session: IUserSession, topicId: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        description: string | null;
        documents_count: number;
        total_size: import("@prisma/client/runtime/library").Decimal;
    }>;
}
