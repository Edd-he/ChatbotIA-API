import { RunsService } from '../runs.service';
export declare class RunsInConversationController {
    private readonly runsService;
    constructor(runsService: RunsService);
    getAllRunsByConversation(conversationId: string): Promise<{
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
}
