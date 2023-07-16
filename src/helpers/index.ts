import { join } from 'path';
import { DATA_DIR } from '@src/constants';
import { UtilityRequest } from '@src/@types';

export function getLanguageFromQuery(language: string) {
  return language == 'en' ? '' : `.${language}`;
}

export function getPathToUtilityFile({ utility, lang, platform }: UtilityRequest['query']) {
  return join(DATA_DIR, `/pages${getLanguageFromQuery(lang)}/${platform}/${utility}.md`);
}
