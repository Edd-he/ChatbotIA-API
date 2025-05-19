import { Type } from 'class-transformer'
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator'

export class CreateDocumentDto {
  @IsUUID(7, {
    message: 'El ID de la conversacion debe ser un UUID version 7 ',
  })
  topic_id: string

  @Length(3, 100, {
    message: 'El nombre del documento debe tener de 3 a 100 caracteres',
  })
  @IsString({ message: 'el nombre del documento debe ser una cadena de texto' })
  name: string

  @IsString({ message: 'el nombre del documento debe ser una cadena de texto' })
  description: string

  @IsArray({ message: 'Los tags deben  ser un array de strings' })
  @IsString({ each: true })
  tags: string[]

  @Type(() => Boolean)
  @IsBoolean({ message: 'El estado "is_active" debe ser un valor booleano.' })
  @IsOptional()
  is_active: boolean
}
