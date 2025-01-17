import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ScoreService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    return this.databaseService.score.findMany();
  }
  async getByUser(id: number) {
    return this.databaseService.score.findFirst({ where: { userId: id } });
  }

  async getTotal(userId: number) {
    return this.databaseService.score.groupBy({
      by: { userId: userId },
      _sum: {
        total: true,
      },
    });
  }

  async updateScore(userId: number, competitionId: number) {
    const score = this.databaseService.score.findFirst({
      where: { AND: [{ userId: userId }, { competitionId: competitionId }] },
    });
    return this.databaseService.score.update({
      where: { id: (await score).id },
      data: { total: { increment: 1 } },
    });
  }
}
