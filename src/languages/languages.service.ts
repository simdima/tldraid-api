import { Injectable, Logger } from '@nestjs/common';
import { readdir } from 'fs/promises';

import { DATA_DIR } from '../config';

export type Languages = string[];

@Injectable()
export class LanguagesService {
  protected languages: Languages = [];

  constructor(private readonly logger: Logger) {
    this.generateLanguagesStruct();
  }

  async generateLanguagesStruct() {
    try {
      this.logger.log('Generating languages structure', LanguagesService.name);

      const files = await readdir(DATA_DIR);

      this.languages = files.reduce<Languages>((target, file) => {
        if (!/^pages./.test(file)) {
          return target;
        }

        const [, languageISO] = file.split('.');
        if (!languageISO) {
          return target;
        }

        return [...target, languageISO];
      }, []);
    } catch (error) {
      this.logger.error(
        `Failed to generate languages structure. ${JSON.stringify(error)}}`,
        LanguagesService.name
      );
    }
  }

  getAll() {
    return this.languages;
  }

  public get _languages(): Languages {
    return this.languages;
  }
}
