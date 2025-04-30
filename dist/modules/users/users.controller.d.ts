import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { IUserSession } from '@auth/interfaces/user-session.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
export declare class UsersController {
    private readonly usersService;
    private readonly eventEmitter;
    constructor(usersService: UsersService, eventEmitter: EventEmitter2);
    createUser(session: IUserSession, createUserDto: CreateUserDto): Promise<{
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
    getAllUsers(query: SearchStatusQueryParamsDto): Promise<{
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
    verifyDni(dni: string): Promise<import("../../providers/reniec/interfaces/reniec-response.interface").IReniecResponse>;
    getOneUser(userId: string): Promise<{
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
    updateUser(userId: string, session: IUserSession, updateUserDto: UpdateUserDto): Promise<{
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
    removeUser(userId: string, session: IUserSession): Promise<{
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
}
