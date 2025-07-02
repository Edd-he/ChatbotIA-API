import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { IUserSession } from '@modules/auth/interfaces/user-session.interface';
import { DocumentsService } from '../documents.service';
import { UpdateDocumentDto } from '../dto/update-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    private readonly eventEmitter;
    constructor(documentsService: DocumentsService, eventEmitter: EventEmitter2);
    getAllDocuments(query: SearchStatusQueryParamsDto): Promise<{
        data: {
            number: number;
            created_at: string;
            updated_at: string;
            id: string;
            name: string;
            is_active: boolean;
            is_archived: boolean;
            url: string;
            description: string;
            tags: string[];
            topic_id: string;
            size: import("@prisma/client/runtime/library").Decimal;
        }[];
        total: number;
        totalPages: number;
    }>;
    getOneDocument(documentId: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        url: string;
        description: string;
        tags: string[];
        topic_id: string;
        size: import("@prisma/client/runtime/library").Decimal;
    }>;
    updateDocument(session: IUserSession, id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        url: string;
        description: string;
        tags: string[];
        topic_id: string;
        size: import("@prisma/client/runtime/library").Decimal;
    }>;
    removeDocument(session: IUserSession, documentId: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        url: string;
        description: string;
        tags: string[];
        topic_id: string;
        size: import("@prisma/client/runtime/library").Decimal;
    }>;
}
