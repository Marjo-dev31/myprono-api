import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompetitionsModule } from './competitions/competitions.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ControllerService } from './controller/controller.service';

@Module({
  imports: [CompetitionsModule, DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ControllerService],
})
export class AppModule {}
