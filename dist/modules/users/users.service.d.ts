import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { ReniecService } from '@providers/reniec/reniec.service';
import { IReniecResponse } from '@providers/reniec/interfaces/reniec-response.interface';
export declare class UsersService {
    private readonly db;
    private reniecService;
    constructor(db: PrismaService, reniecService: ReniecService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        updated_at: Date;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }>;
    findAll({ query, page, page_size, status, }: SearchStatusQueryParamsDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        dni: string;
        email: string;
        is_active: boolean;
        updated_at: Date;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }[]>;
    getOne(id: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        dni: string;
        email: string;
        is_active: boolean;
        updated_at: Date;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getOneByEmail(email: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        updated_at: Date;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        updated_at: Date;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        updated_at: Date;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }>;
    verifyDni(dni: string): Promise<IReniecResponse>;
}
