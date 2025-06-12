import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
import { RunsService } from '../runs.service';
export declare class RunsController {
    private readonly runsService;
    constructor(runsService: RunsService);
    getAllruns(query: RangeDateQueryParams): Promise<{
        data: {
            number: number;
            created_at: string;
            error: string | null;
            conversation_id: string;
            is_run_successful: boolean;
            model_llm: string;
            latency: import("@prisma/client/runtime/library").Decimal;
            tokens: number;
            input: string;
            output: string;
            id: string;
        }[];
        total: number;
        totalPages: number;
    }>;
    getRun(id: string): Promise<{
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
    }>;
}
