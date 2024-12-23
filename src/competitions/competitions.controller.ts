import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompetitionsService } from './competitions.service';
import { Prisma } from '@prisma/client';

@Controller('competitions')
export class CompetitionsController {
  constructor(private readonly competitionsService: CompetitionsService) {}

  @Get()
  getAllCompetitons() {
    return this.competitionsService.getAll();
  }

  // @Get(':id')
  // getAllContestsByCompetition(@Param('id') id: string) {
  //   return this.competitionsService.getAllContestByCompetition(id);
  // }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.competitionsService.getById(+id);
  }

  @Post()
  create(@Body() createCompetitionDto: Prisma.CompetitionCreateInput) {
    return this.competitionsService.create(createCompetitionDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompetitionDto: Prisma.CompetitionUpdateInput,
  ) {
    return this.competitionsService.update(+id, updateCompetitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionsService.remove(+id);
  }

  @Get(':id/contests')
  getContestsByCompetition(@Param('id') id: string) {
    return this.competitionsService.getContestsByCompetition(+id);
  }
}
