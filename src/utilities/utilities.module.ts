import { Logger, Module } from '@nestjs/common';

import { UtilitiesService } from './utilities.service';
import { UtilitiesController } from './utilities.controller';
import { LanguagesService } from '../languages/languages.service';

@Module({
  imports: [],
  controllers: [UtilitiesController],
  providers: [UtilitiesService, LanguagesService, Logger],
})
export class UtilitiesModule {}
