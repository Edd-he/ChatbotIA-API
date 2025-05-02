import { PrismaService } from '@providers/prisma/prisma.service';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { CloudinaryService } from '@providers/cloudinary/cloudinary.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
export declare class DocumentsService {
    private readonly db;
    private readonly cloudinary;
    constructor(db: PrismaService, cloudinary: CloudinaryService);
    create(createDocumentDto: CreateDocumentDto, file: Express.Multer.File): Promise<{
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
    getAll({ page, page_size, status, query }: SearchStatusQueryParamsDto): Promise<{
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
    getAllByTopic(topicId: string): Promise<{
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
    getOne(id: string): Promise<{
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
    update(id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
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
    remove(id: string): Promise<{
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
