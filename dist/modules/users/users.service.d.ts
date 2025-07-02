import { PrismaService } from 'src/providers/prisma/prisma.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { ReniecService } from '@providers/reniec/reniec.service';
import { IReniecResponse } from '@providers/reniec/interfaces/reniec-response.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly db;
    private reniecService;
    constructor(db: PrismaService, reniecService: ReniecService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        dni: string;
        name: string;
        last_name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        modules_access: string[];
        is_active: boolean;
    }>;
    findAll({ query, page, page_size, status, }: SearchStatusQueryParamsDto): Promise<{
        data: {
            number: number;
            created_at: string;
            updated_at: string;
            id: string;
            dni: string;
            name: string;
            last_name: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            modules_access: string[];
            is_active: boolean;
        }[];
        total: number;
        totalPages: number;
    }>;
    getOne(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        dni: string;
        name: string;
        last_name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        modules_access: string[];
        is_active: boolean;
    }>;
    getOneByEmail(email: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        dni: string;
        name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        modules_access: string[];
        is_active: boolean;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        actualUser: {
            id: string;
            created_at: Date;
            updated_at: Date;
            dni: string;
            name: string;
            last_name: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            modules_access: string[];
            is_active: boolean;
        };
        updatedUser: {
            id: string;
            created_at: Date;
            updated_at: Date;
            dni: string;
            name: string;
            last_name: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            modules_access: string[];
            is_active: boolean;
        };
    }>;
    updatePassword(id: string, password: string): Promise<{
        actualUser: {
            id: string;
            created_at: Date;
            updated_at: Date;
            dni: string;
            name: string;
            last_name: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            modules_access: string[];
            is_active: boolean;
        };
        updatedUser: {
            id: string;
            created_at: Date;
            updated_at: Date;
            dni: string;
            name: string;
            last_name: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            modules_access: string[];
            is_active: boolean;
        };
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        dni: string;
        name: string;
        last_name: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
        modules_access: string[];
        is_active: boolean;
        is_archived: boolean;
    }>;
    verifyDni(dni: string): Promise<IReniecResponse>;
}
