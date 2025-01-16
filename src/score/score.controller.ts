import { Controller, Get, Param } from '@nestjs/common';
import { ScoreService } from './score.service';
// import { Prisma } from '@prisma/client';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Get()
  getAllScore() {
    return this.scoreService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.scoreService.getByUser(+id);
  }
}
