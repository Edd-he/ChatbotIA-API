import { DocumentsService } from '../documents.service';
import { CreateDocumentDto } from '../dto/create-document.dto';
export declare class DocumentsInTopicController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    createDocument(topicId: string, createDocumentDto: CreateDocumentDto, file: Express.Multer.File): Promise<{
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
    getAllDocumentsByTopic(topicId: string): Promise<{
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
}
