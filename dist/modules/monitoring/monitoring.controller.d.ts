import { MonitoringService } from './monitoring.service';
export declare class MonitoringController {
    private readonly monitoringService;
    constructor(monitoringService: MonitoringService);
    getRunsAnalytics(): Promise<{
        date: string;
        ok: number;
        error: number;
    }[]>;
}
