import { Injectable } from '@nestjs/common';
import { readdir } from 'fs/promises';
import { DATA_DIR } from 'src/config';

export type Languages = string[];

@Injectable()
export class LanguagesService {
  protected languages: Languages = [];

  constructor() {
    this.generateLanguagesStruct();
  }

  async generateLanguagesStruct() {
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
  }

  getAll() {
    return this.languages;
  }

  public get _languages(): Languages {
    return this.languages;
  }
}
