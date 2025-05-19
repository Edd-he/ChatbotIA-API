import { PrismaService } from 'src/providers/prisma/prisma.service';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
import { CreateRunDto } from './dto/create-run.dto';
export declare class RunsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createRunDto: CreateRunDto): Promise<{
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
    }>;
    getAll({ start_date, end_date, page, page_size, }: RangeDateQueryParams): Promise<{
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
    }[]>;
    getAllByConversation(conversationId: string): Promise<{
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
    }[]>;
    getOne(runId: string): Promise<{
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
    }>;
}
