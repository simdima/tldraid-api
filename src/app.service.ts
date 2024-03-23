import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private currenVersion: string | undefined = undefined;

  constructor() {
    this.currenVersion = process.env['npm_package_version'];
  }

  getVersion() {
    return {
      status: 'ok',
      version: this.currenVersion,
    };
  }
}
