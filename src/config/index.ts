import { join, resolve } from 'path';

/* 
  Since build process is asynchronous during development NestJS fails to copy the whole data directory before initializing route modules. For this reason in dev environment data source direcotry will be available to the application via 'src/data' and not 'dist/data'
*/
export const DATA_DIR = join(
  resolve(__dirname, process.env.IS_DEV ? '../..' : '..'),
  process.env.IS_DEV ? 'src/data' : '/data'
);
