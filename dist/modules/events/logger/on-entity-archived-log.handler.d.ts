import { LoggerService } from '@modules/logger/logger.service';
import { EntityOperationEvent } from './logger-events.interfaces';
export declare class OnEntityArchivedLogHandler {
    private readonly logger;
    constructor(logger: LoggerService);
    handleCreated(payload: EntityOperationEvent): Promise<void>;
}
