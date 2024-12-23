import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAll() {
    return this.databaseService.user.findMany();
  }

  async getById(id: number) {
    return this.databaseService.user.findUnique({ where: { id } });
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    const newUser = this.databaseService.user.create({ data: createUserDto });
    this.databaseService.score.createMany({
      data: [
        { total: 0, competitionId: 1, userId: (await newUser).id },
        { total: 0, competitionId: 2, userId: (await newUser).id },
      ],
    });
    return newUser;
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
