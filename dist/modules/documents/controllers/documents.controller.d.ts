import { DocumentsService } from '../documents.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { UpdateDocumentDto } from '../dto/update-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    getAllDocuments(query: SearchStatusQueryParamsDto): Promise<{
        is_active: boolean;
        description: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
        topic_id: string;
        tags: string[];
        url: string;
    }[]>;
    getOneDocument(documentId: string): Promise<{
        is_active: boolean;
        description: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
        topic_id: string;
        tags: string[];
        url: string;
    }>;
    updateDocument(id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
        is_active: boolean;
        description: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
        topic_id: string;
        tags: string[];
        url: string;
    }>;
    removeDocument(documentId: string): Promise<{
        is_active: boolean;
        description: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
        topic_id: string;
        tags: string[];
        url: string;
    }>;
}
