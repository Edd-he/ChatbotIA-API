import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateDocumentDto {
  @IsUUID(7)
  topic_id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @Type(() => Boolean)
  @IsBoolean({ message: 'El estado is_active debe ser un valor booleano.' })
  @IsOptional()
  is_active: boolean;
}
