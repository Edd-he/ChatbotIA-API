import { Controller, Get, Query } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { PaginatedParamsDto } from '@common/query-params/paginated-params';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Auth } from '@auth/decorators/auth.decorator';

@ApiBearerAuth()
@Auth(['ADMIN', 'SUPER_ADMIN'])
@Controller('logs')
export class LoggerController {
  constructor(private readonly logger: LoggerService) {}

  @Get('get-all-logs')
  async findAll(@Query() query: PaginatedParamsDto) {
    return await this.logger.getAll(query);
  }
}
