import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ContestsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    return this.databaseService.contest.findMany();
  }

  async create(createContestDto: Prisma.ContestCreateInput) {
    return this.databaseService.contest.create({ data: createContestDto });
  }
}
