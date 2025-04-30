import { IUserSession } from '@modules/auth/interfaces/user-session.interface';
export interface EntityOperationEvent {
    session: IUserSession;
    entityId: string;
}
export declare enum LoggerEvents {
    USER_CREATED_EVENT = "user.created",
    USER_UPDATED_EVENT = "user.updated",
    USER_ARCHIVED_EVENT = "user.archived"
}
