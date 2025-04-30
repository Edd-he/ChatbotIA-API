import { Type } from 'class-transformer';
import {
  IsString,
  Length,
  IsEmail,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(8, 8, { message: 'El DNI debe tener exactamente 8 caracteres.' })
  dni: string;

  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  email: string;

  @IsString()
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres.',
  })
  password: string;

  @Type(() => Boolean)
  @IsBoolean({ message: 'El estado is_active debe ser un valor booleano.' })
  @IsOptional()
  is_active: boolean;
}
