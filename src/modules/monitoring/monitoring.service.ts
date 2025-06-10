import { Injectable } from '@nestjs/common'
import { PrismaService } from '@providers/prisma/prisma.service'

@Injectable()
export class MonitoringService {
  constructor(private readonly db: PrismaService) {}

  async getRunsAnalytics() {
    const start = new Date(new Date().getFullYear(), 0, 1)
    const end = new Date()

    const runs = await this.db.run.findMany({
      where: {
        created_at: {
          gte: start,
          lte: end,
        },
      },
      select: {
        created_at: true,
        is_run_successful: true,
      },
    })

    const summary = new Map<string, { ok: number; error: number }>()
    for (const run of runs) {
      const date = run.created_at.toISOString().split('T')[0]
      if (!summary.has(date)) {
        summary.set(date, { ok: 0, error: 0 })
      }
      const entry = summary.get(date)!
      if (run.is_run_successful) {
        entry.ok++
      } else {
        entry.error++
      }
    }

    const result: { date: string; ok: number; error: number }[] = []
    const current = new Date(start)

    while (current <= end) {
      const date = current.toISOString().split('T')[0]
      const counts = summary.get(date) ?? { ok: 0, error: 0 }
      result.push({ date, ...counts })

      current.setDate(current.getDate() + 1)
    }

    return result
  }
}
