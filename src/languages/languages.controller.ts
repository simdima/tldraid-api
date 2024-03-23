import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { LanguagesService } from './languages.service';
import { getHttpRequestInfo } from '../logger/logger.config';

@Controller('languages')
export class LanguagesController {
  constructor(
    private readonly languagesService: LanguagesService,
    private readonly logger: Logger
  ) {}

  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    this.logger.log(getHttpRequestInfo(req, res), LanguagesController.name);

    res.json(this.languagesService.getAll());
  }
}
