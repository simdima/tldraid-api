import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { AppService } from './app.service';
import { getHttpRequestInfo } from './logger/logger.config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger
  ) {}

  @Get()
  getVersion(@Req() req: Request, @Res() res: Response) {
    this.logger.log(getHttpRequestInfo(req, res), AppController.name);

    res.json(this.appService.getVersion());
  }
}
