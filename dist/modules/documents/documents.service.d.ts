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
    getAll({ page, page_size, status, query }: SearchStatusQueryParamsDto): Promise<{
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
    getAllByTopic(topicId: string): Promise<{
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
    getOne(id: string): Promise<{
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
    update(id: string, updateDocumentDto: UpdateDocumentDto): Promise<{
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
    remove(id: string): Promise<{
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
}
