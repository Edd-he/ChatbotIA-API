import { PrismaService } from 'src/providers/prisma/prisma.service';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
import { GeminiAIService } from '@providers/gemini-ai/gemini-ai.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { GenerateTitleDto } from './dto/generate-title.dto';
export declare class ConversationsService {
    private readonly db;
    private readonly ai;
    constructor(db: PrismaService, ai: GeminiAIService);
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
            conversation_id: string;
            is_run_successful: boolean;
            model_llm: string;
            latency: import("@prisma/client/runtime/library").Decimal;
            tokens: number;
            input: string;
            output: string;
            id: string;
            created_at: Date;
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
    generateTitle({ conversation_id, input }: GenerateTitleDto): Promise<string>;
    update(conversationId: string, tokens: number): Promise<void>;
    private generateTittle;
}
