import { PrismaService } from 'src/providers/prisma/prisma.service';
import { CreateRunDto } from './dto/create-run.dto';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
export declare class RunsService {
    private readonly db;
    constructor(db: PrismaService);
    create(createRunDto: CreateRunDto): Promise<{
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
    }>;
    getAll({ start_date, end_date, page, page_size, }: RangeDateQueryParams): Promise<{
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
    }[]>;
    getAllByConversation(conversationId: string): Promise<{
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
    }[]>;
    getOne(runId: string): Promise<{
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
    }>;
}
