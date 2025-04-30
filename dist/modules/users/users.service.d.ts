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
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }>;
    findAll({ query, page, page_size, status, }: SearchStatusQueryParamsDto): Promise<{
        dni: string;
        email: string;
        is_active: boolean;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }[]>;
    getOne(id: string): Promise<{
        dni: string;
        email: string;
        is_active: boolean;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getOneByEmail(email: string): Promise<{
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }>;
    remove(id: string): Promise<{
        dni: string;
        email: string;
        password: string;
        is_active: boolean;
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
        is_archived: boolean;
    }>;
    verifyDni(dni: string): Promise<IReniecResponse>;
}
