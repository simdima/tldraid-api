import { Request } from 'express';
import { readdir } from 'fs/promises';
import { DATA_DIR } from '@src/constants';
import { Languages, LanguagesResponse } from '@src/@types';

export default async function (_: Request, res: LanguagesResponse) {
  try {
    const files = await readdir(DATA_DIR);

    const data = files.reduce<Languages>((target, file) => {
      if (!/^pages./.test(file)) {
        return target;
      }

      const [, languageISO] = file.split('.');
      if (!languageISO) {
        return target;
      }

      return [...target, languageISO];
    }, []);

    res.status(200).json({
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Failed to fetch available languages',
    });
  }
}
