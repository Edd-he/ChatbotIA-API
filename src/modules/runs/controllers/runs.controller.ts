import { Controller, Get, Param, Query } from '@nestjs/common';
import { RunsService } from '../runs.service';
import { ValidateUUID } from '@common/pipes/validate-uuid.pipe';
import { RangeDateQueryParams } from '@common/query-params/rangeDate-query-params';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Get('runs/get-all-runs')
  getAllruns(@Query() query: RangeDateQueryParams) {
    return this.runsService.getAll(query);
  }

  @Get(':runId/get-run')
  getRun(@Param('runId', ValidateUUID) id: string) {
    return this.runsService.getOne(id);
  }
}
