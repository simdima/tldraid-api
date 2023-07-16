import { readdir } from 'fs/promises';
import { join as getAbsolutePath } from 'path';
import { DATA_DIR } from '@src/constants';
import { UtilitiesRequest, UtilitiesResponse } from '@src/@types';

export default async function (req: UtilitiesRequest, res: UtilitiesResponse) {
  try {
    const { query } = req;
    const files = await readdir(getAbsolutePath(DATA_DIR, `/pages/${query.platform}`));

    const data = files.map(file => {
      const [utilityName] = file.split('.md');

      return utilityName;
    });

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Failed to fetch utilities with this search term',
    });
  }
}
