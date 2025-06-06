import { PrismaService } from 'src/providers/prisma/prisma.service';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
import { CreateConversationDto } from './dto/create-conversation.dto';
export declare class ConversationsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createConversationDto: CreateConversationDto): Promise<{
        title: string | null;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        last_run: Date | null;
        total_runs: number;
        total_tokens: number;
        status: import(".prisma/client").$Enums.ConversationStatus;
    }>;
    getAll({ page, page_size, start_date, end_date, }: RangeDateQueryParams): Promise<{
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
    getOneWithRuns(id: string): Promise<{
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
    getOne(conversationId: string): Promise<{
        title: string | null;
        id: string;
        created_at: Date;
        completed_at: Date | null;
        last_run: Date | null;
        total_runs: number;
        total_tokens: number;
        status: import(".prisma/client").$Enums.ConversationStatus;
    }>;
    update(conversationId: string, tokens: number): Promise<void>;
}
