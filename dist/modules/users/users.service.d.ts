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
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        dni: string;
        email: string;
        password: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll({ query, page, page_size, status, }: SearchStatusQueryParamsDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        dni: string;
        email: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    getOne(id: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        dni: string;
        email: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getOneByEmail(email: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        dni: string;
        email: string;
        password: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        dni: string;
        email: string;
        password: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        updated_at: Date;
        is_archived: boolean;
        dni: string;
        email: string;
        password: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    verifyDni(dni: string): Promise<IReniecResponse>;
}
