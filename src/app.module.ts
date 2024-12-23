import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompetitionsModule } from './competitions/competitions.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ContestsModule } from './contests/contests.module';

@Module({
  imports: [CompetitionsModule, DatabaseModule, UserModule, ContestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
