import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LanguagesModule } from './languages/languages.module';
import { UtilitiesModule } from './utilities/utilities.module';
import loggerConfig from './logger/logger.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRoot(loggerConfig),
    LanguagesModule,
    UtilitiesModule,
  ],
  providers: [AppService, Logger],
  controllers: [AppController],
})
export class AppModule {}
