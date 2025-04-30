import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { SearchStatusQueryParamsDto } from '@common/query-params/search-status-query-params';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserSession } from '@auth/decorators/user-session.decorator';
import { IUserSession } from '@auth/interfaces/user-session.interface';
import { Auth } from '@auth/decorators/auth.decorator';
import { PublicAccess } from '@auth/decorators/public.decorator';
import { ValidateDNI } from './pipes/validate-dni.pipe';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { LoggerEvents } from '@modules/events/logger/logger-events.interfaces';

@ApiBearerAuth()
@Auth(['ADMIN', 'SUPER_ADMIN'])
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Post('create-user')
  async createUser(
    @UserSession() session: IUserSession,
    @Body() createUserDto: CreateUserDto,
  ) {
    const admin = await this.usersService.create(createUserDto);
    this.eventEmitter.emit(LoggerEvents.USER_CREATED_EVENT, {
      session,
      entityId: admin.id,
    });
    return admin;
  }

  @Get('get-all-users')
  async getAllUsers(@Query() query: SearchStatusQueryParamsDto) {
    return this.usersService.findAll(query);
  }

  @PublicAccess()
  @Get(':userDni/verify-DNI')
  async verifyDni(@Param('userDni', ValidateDNI) dni: string) {
    return this.usersService.verifyDni(dni);
  }

  @Get(':userId/get-user')
  async getOneUser(@Param('userId', ValidateUUID) userId: string) {
    return this.usersService.getOne(userId);
  }

  @Patch(':userId/update-user')
  async updateUser(
    @Param('userId', ValidateUUID) userId: string,
    @UserSession() session: IUserSession,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const admin = await this.usersService.update(userId, updateUserDto);
    this.eventEmitter.emit(LoggerEvents.USER_UPDATED_EVENT, {
      session,
      entityId: admin.id,
    });
    return admin;
  }

  @Delete(':userId/remove-user')
  async removeUser(
    @Param('userId', ValidateUUID) userId: string,
    @UserSession() session: IUserSession,
  ) {
    const admin = await this.usersService.remove(userId);
    this.eventEmitter.emit(LoggerEvents.USER_ARCHIVED_EVENT, {
      session,
      entityId: admin.id,
    });
    return admin;
  }
}
