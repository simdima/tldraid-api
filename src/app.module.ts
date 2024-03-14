import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LanguagesModule } from './languages/languages.module';
import { UtilitiesModule } from './utilities/utilities.module';

@Module({
  imports: [ConfigModule.forRoot(), LanguagesModule, UtilitiesModule],
})
export class AppModule {}
