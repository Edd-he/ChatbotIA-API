import { RunsService } from '../runs.service';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
export declare class RunsController {
    private readonly runsService;
    constructor(runsService: RunsService);
    getAllruns(query: RangeDateQueryParams): Promise<{
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
    getRun(id: string): Promise<{
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
