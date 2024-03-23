import { Logger, Module } from '@nestjs/common';

import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService, Logger],
})
export class LanguagesModule {}
