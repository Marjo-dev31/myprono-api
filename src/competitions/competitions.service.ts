import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CompetitionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    return this.databaseService.competition.findMany();
  }

  // getAllContestByCompetition(id: string) {
  //   const contests = this.contests.filter(
  //     (contest) => contest.competitionId === id,
  //   );
  //   return contests.sort((a, b) => +a.day - +b.day);
  // }

  async getById(id: number) {
    return this.databaseService.competition.findUnique({
      where: { id },
    });
  }

  async create(createCompetitionDto: Prisma.CompetitionCreateInput) {
    return this.databaseService.competition.create({
      data: createCompetitionDto,
    });
  }

  async update(
    id: number,
    updateCompetitionDto: Prisma.CompetitionUpdateInput,
  ) {
    return this.databaseService.competition.update({
      where: { id },
      data: updateCompetitionDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.competition.delete({
      where: { id },
    });
  }

  async getContestsByCompetition(id: number) {
    return this.databaseService.contest.findMany({
      where: { competitionId: id },
    });
  }
}
