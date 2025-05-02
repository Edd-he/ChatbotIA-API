import { Controller, Get, Param, Query } from '@nestjs/common';
import { RunsService } from '../runs.service';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';
import { ApiOperation } from '@nestjs/swagger';
@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Get('runs/get-all-runs')
  @ApiOperation({ summary: 'Obiene todas las ejecuciones' })
  getAllruns(@Query() query: RangeDateQueryParams) {
    return this.runsService.getAll(query);
  }

  @Get(':runId/get-run')
  @ApiOperation({ summary: 'Obiene una sola ejecucion' })
  getRun(@Param('runId', ValidateUUID) id: string) {
    return this.runsService.getOne(id);
  }
}
