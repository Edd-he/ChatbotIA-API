import { DocumentsService } from '../documents.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { UpdateDocumentDto } from '../dto/update-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    getAllDocuments(query: SearchStatusQueryParamsDto): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        url: string;
        topic_id: string;
    }[]>;
    getOneDocument(documentId: string): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        url: string;
        topic_id: string;
    }>;
    updateDocument(id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        url: string;
        topic_id: string;
    }>;
    removeDocument(documentId: string): Promise<{
        description: string;
        id: string;
        created_at: Date;
        name: string;
        tags: string[];
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        url: string;
        topic_id: string;
    }>;
}
