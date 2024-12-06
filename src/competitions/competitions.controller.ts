import { Controller, Get, Param } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';

@Controller('competitions')
export class CompetitionsController {
  constructor(private readonly competionsService: CompetitionsService) {}

  @Get()
  getAllCompetitons() {
    return this.competionsService.getAll();
  }

  @Get(':id')
  getAllContestsByDay(@Param('id') id: string) {
    return this.competionsService.getAllContestByDay(id);
  }
}
