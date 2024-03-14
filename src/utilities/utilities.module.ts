import { Module } from '@nestjs/common';
import { UtilitiesService } from './utilities.service';
import { UtilitiesController } from './utilities.controller';
import { LanguagesService } from 'src/languages/languages.service';

@Module({
  imports: [],
  controllers: [UtilitiesController],
  providers: [UtilitiesService, LanguagesService],
})
export class UtilitiesModule {}
