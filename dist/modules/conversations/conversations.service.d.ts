import { CreateConversationDto } from './dto/create-conversation.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
export declare class ConversationsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createConversationDto: CreateConversationDto): Promise<{
        title: string | null;
        status: import(".prisma/client").$Enums.ConversationStatus;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        total_tokens: number;
    }>;
    getAll({ page, page_size, start_date, end_date, }: RangeDateQueryParams): Promise<{
        title: string | null;
        status: import(".prisma/client").$Enums.ConversationStatus;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        total_tokens: number;
    }[]>;
    getOneWithRuns(id: string): Promise<{
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
    getOne(conversationId: string): Promise<{
        title: string | null;
        status: import(".prisma/client").$Enums.ConversationStatus;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        total_tokens: number;
    }>;
    updateTotalTokens(conversationId: string, tokens: number): Promise<void>;
}
