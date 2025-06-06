import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { UpdateDocumentDto } from '../dto/update-document.dto';
import { DocumentsService } from '../documents.service';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    getAllDocuments(query: SearchStatusQueryParamsDto): Promise<{
        data: {
            number: number;
            created_at: string;
            updated_at: string;
            description: string;
            id: string;
            name: string;
            tags: string[];
            is_active: boolean;
            is_archived: boolean;
            url: string;
            topic_id: string;
            size: import("@prisma/client/runtime/library").Decimal;
        }[];
        total: number;
        totalPages: number;
    }>;
    getOneDocument(documentId: string): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        url: string;
        topic_id: string;
        size: import("@prisma/client/runtime/library").Decimal;
    }>;
    updateDocument(id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        url: string;
        topic_id: string;
        size: import("@prisma/client/runtime/library").Decimal;
    }>;
    removeDocument(documentId: string): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        url: string;
        topic_id: string;
        size: import("@prisma/client/runtime/library").Decimal;
    }>;
}
