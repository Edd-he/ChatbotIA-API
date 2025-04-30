import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginatedParamsDto } from './paginated-params';
import { IsOptional, IsString } from 'class-validator';

export class SearchQueryParamsDto extends PaginatedParamsDto {
  @ApiPropertyOptional({ description: 'Texto de búsqueda', example: '' })
  @IsOptional()
  @IsString()
  query?: string = '';
}
