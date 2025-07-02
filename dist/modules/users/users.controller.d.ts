import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { IUserSession } from '@auth/interfaces/user-session.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    private readonly eventEmitter;
    constructor(usersService: UsersService, eventEmitter: EventEmitter2);
    createUser(session: IUserSession, createUserDto: CreateUserDto): Promise<{
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
    getAllUsers(query: SearchStatusQueryParamsDto): Promise<{
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
    verifyDni(dni: string): Promise<import("../../providers/reniec/interfaces/reniec-response.interface").IReniecResponse>;
    getOneUser(userId: string): Promise<{
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
    updateUser(userId: string, session: IUserSession, updateUserDto: UpdateUserDto): Promise<{
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
    changePassword(userId: string, session: IUserSession, newPassword: string): Promise<{
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
    removeUser(userId: string, session: IUserSession): Promise<{
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
}
