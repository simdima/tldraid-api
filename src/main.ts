import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import loggerConfig from './logger/logger.config';

(async () => {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerConfig),
  });
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
})();
