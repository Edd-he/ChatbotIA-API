import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTopicDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @Type(() => Boolean)
  @IsBoolean({ message: 'El estado is_active debe ser un valor booleano.' })
  @IsOptional()
  is_active: boolean;
}
