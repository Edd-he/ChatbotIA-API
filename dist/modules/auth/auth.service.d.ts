import { UsersService } from '@modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signIn.dto';
import { IUserSession } from '@auth/interfaces/user-session.interface';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register(): Promise<void>;
    signIn({ email, password }: SignInDto): Promise<{
        user: IUserSession;
        tokens: {
            access: string;
            refresh: string;
        };
    }>;
    signOut(): Promise<void>;
    refresh(user: any): Promise<{
        access: string;
        refresh: string;
    }>;
}
