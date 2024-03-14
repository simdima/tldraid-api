import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { readFile, readdir } from 'fs/promises';

import { join } from 'path';
import { DATA_DIR } from 'src/config';
import { LanguagesService } from 'src/languages/languages.service';

export type Platform = 'android' | 'common' | 'linux' | 'osx' | 'windows';
type UtilityParams = {
  platform: Platform;
  language: string;
  utility: string;
};

@Injectable()
export class UtilitiesService {
  private utilities: string[] = [];

  constructor(private readonly languageService: LanguagesService) {}

  async getAllForCurrentPlatform(platform: Platform) {
    const files = await readdir(join(DATA_DIR, `/pages/${platform}`));

    this.utilities = files.map(file => {
      const [utilityName] = file.split('.md');

      return utilityName;
    });

    return this.utilities;
  }

  async getSpecificUtilityInfo(params: UtilityParams) {
    const { language, platform } = params;

    if (this.languageService._languages.indexOf(language) < 0) {
      throw new BadRequestException('Invalid language parameter');
    }

    // create utils struct if this is the first request
    if (!this.utilities.length) {
      await this.getAllForCurrentPlatform(platform);
    }

    try {
      const localizedDescription = await this.readMarkdownFile(params);

      return { description: localizedDescription };
    } catch (error) {
      try {
        const engDescription = await this.readMarkdownFile(params, 'en');

        return { description: engDescription };
      } catch (error) {
        throw new NotFoundException(
          'No such utility. Make sure utility name is correct'
        );
      }
    }
  }

  protected readMarkdownFile(params: UtilityParams, language?: string) {
    return readFile(
      this.getPathToUtilityMarkdownFile(
        !language ? params : { ...params, language }
      ),
      {
        encoding: 'utf8',
      }
    );
  }

  protected getPathToUtilityMarkdownFile({
    language,
    platform,
    utility,
  }: UtilityParams) {
    return join(
      DATA_DIR,
      `/pages${language === 'en' ? '' : `.${language}`}/${platform}/${utility}.md`
    );
  }
}
