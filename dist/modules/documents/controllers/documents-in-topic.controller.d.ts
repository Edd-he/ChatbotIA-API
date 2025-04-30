import { CreateDocumentDto } from '../dto/create-document.dto';
import { DocumentsService } from '../documents.service';
export declare class DocumentsInTopicController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    createDocument(topicId: string, createDocumentDto: CreateDocumentDto, file: Express.Multer.File): Promise<{
        is_active: boolean;
        description: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
        url: string;
        tags: string[];
        topic_id: string;
    }>;
    getAllDocumentsByTopic(topicId: string): Promise<{
        is_active: boolean;
        description: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        is_archived: boolean;
        url: string;
        tags: string[];
        topic_id: string;
    }[]>;
}
