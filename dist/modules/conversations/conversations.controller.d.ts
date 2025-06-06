import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
import { ConversationsService } from './conversations.service';
export declare class ConversationsController {
    private readonly conversationsService;
    constructor(conversationsService: ConversationsService);
    getAllConversations(query: RangeDateQueryParams): Promise<{
        data: {
            number: number;
            created_at: string;
            last_run: string;
            completed_at: string;
            title: string | null;
            id: string;
            total_runs: number;
            total_tokens: number;
            status: import(".prisma/client").$Enums.ConversationStatus;
        }[];
        total: number;
        totalPages: number;
    }>;
    getConversation(id: string): Promise<{
        runs: {
            error: string | null;
            id: string;
            created_at: Date;
            is_run_successful: boolean;
            model_llm: string;
            latency: import("@prisma/client/runtime/library").Decimal;
            tokens: number;
            input: string;
            output: string;
            conversation_id: string;
        }[];
    } & {
        title: string | null;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        last_run: Date | null;
        total_runs: number;
        total_tokens: number;
        status: import(".prisma/client").$Enums.ConversationStatus;
    }>;
}
