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
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        dni: string;
        email: string;
        password: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getAllUsers(query: SearchStatusQueryParamsDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        dni: string;
        email: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    verifyDni(dni: string): Promise<import("../../providers/reniec/interfaces/reniec-response.interface").IReniecResponse>;
    getOneUser(userId: string): Promise<{
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
    updateUser(userId: string, session: IUserSession, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        dni: string;
        email: string;
        password: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    removeUser(userId: string, session: IUserSession): Promise<{
        id: string;
        created_at: Date;
        name: string;
        is_active: boolean;
        is_archived: boolean;
        updated_at: Date;
        dni: string;
        email: string;
        password: string;
        last_name: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
