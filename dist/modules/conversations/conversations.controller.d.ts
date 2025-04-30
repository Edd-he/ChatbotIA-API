import { ConversationsService } from './conversations.service';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
export declare class ConversationsController {
    private readonly conversationsService;
    constructor(conversationsService: ConversationsService);
    getAllConversations(query: RangeDateQueryParams): Promise<{
        title: string | null;
        status: import(".prisma/client").$Enums.ConversationStatus;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        total_tokens: number;
    }[]>;
    getConversation(id: string): Promise<{
        runs: {
            conversation_id: string;
            is_run_successful: boolean;
            model_llm: string;
            latency: import("@prisma/client/runtime/library").Decimal;
            tokens: number;
            input: string;
            output: string;
            error: string | null;
            id: string;
            created_at: Date;
        }[];
    } & {
        title: string | null;
        status: import(".prisma/client").$Enums.ConversationStatus;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        total_tokens: number;
    }>;
}
