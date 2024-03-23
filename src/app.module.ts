import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';

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
  providers: [Logger],
})
export class AppModule {}
