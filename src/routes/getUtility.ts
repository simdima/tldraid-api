import { readFile } from 'fs';
import { getPathToUtilityFile } from '@src/helpers';
import { UtilityRequest, UtilityResponse } from '@src/@types';

export default function ({ query }: UtilityRequest, res: UtilityResponse) {
  // Search for localized version of a utility first..
  const localizedPath = getPathToUtilityFile(query);
  readFile(localizedPath, { encoding: 'utf8' }, (_, data) => {
    if (data) {
      res.status(200).json({
        data,
      });
    } else {
      // ...then for the English version
      const defaultPath = getPathToUtilityFile({ ...query, lang: 'en' });
      readFile(defaultPath, { encoding: 'utf8' }, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            error: 'Failed to fetch description for this utility',
          });
        } else {
          res.status(200).json({ data });
        }
      });
    }
  });
}
