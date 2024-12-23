import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ContestsService } from './contests.service';

@Controller('contests')
export class ContestsController {
  constructor(private readonly contestsService: ContestsService) {}

  @Get()
  GetAll() {
    return this.contestsService.getAll();
  }

  @Post()
  create(@Body() createContestDto: Prisma.ContestCreateInput) {
    return this.contestsService.create(createContestDto);
  }
}
