import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { DocumentsService } from '../documents.service';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    getAllDocuments(query: SearchStatusQueryParamsDto): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        topic_id: string;
        is_active: boolean;
        updated_at: Date;
        url: string;
        size: import("@prisma/client/runtime/library").Decimal;
        is_archived: boolean;
    }[]>;
    getOneDocument(documentId: string): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        topic_id: string;
        is_active: boolean;
        updated_at: Date;
        url: string;
        size: import("@prisma/client/runtime/library").Decimal;
        is_archived: boolean;
    }>;
    updateDocument(id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        topic_id: string;
        is_active: boolean;
        updated_at: Date;
        url: string;
        size: import("@prisma/client/runtime/library").Decimal;
        is_archived: boolean;
    }>;
    removeDocument(documentId: string): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        topic_id: string;
        is_active: boolean;
        updated_at: Date;
        url: string;
        size: import("@prisma/client/runtime/library").Decimal;
        is_archived: boolean;
    }>;
}
