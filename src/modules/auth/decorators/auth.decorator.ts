import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from './roles.decorator';
import { Role } from '@prisma/client';

export function Auth(role: Role[]) {
  return applyDecorators(Roles(role), UseGuards(AuthGuard, RolesGuard));
}
