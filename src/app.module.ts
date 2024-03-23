import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LanguagesModule } from './languages/languages.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot(), LanguagesModule, UtilitiesModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
