import {
  Controller,
  Get,
  Logger,
  Param,
  Req,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { UtilitiesService } from './utilities.service';
import { GetUtilitiesDto } from './dto/get-utilities.dto';
import { getHttpRequestInfo } from '../logger/logger.config';

@Controller('utilities')
export class UtilitiesController {
  constructor(
    private readonly utilitiesService: UtilitiesService,
    private readonly logger: Logger
  ) {}

  @Get(':platform')
  async findAll(
    @Req() req: Request,
    @Res() res: Response,
    @Param(new ValidationPipe()) params: GetUtilitiesDto
  ) {
    this.logger.log(getHttpRequestInfo(req, res), UtilitiesController.name);

    res.json(
      await this.utilitiesService.getAllForCurrentPlatform(params.platform)
    );
  }

  @Get(':platform/:language/:utility')
  async findSpecificUtility(
    @Req() req: Request,
    @Res() res: Response,
    @Param(new ValidationPipe()) { platform }: GetUtilitiesDto,
    @Param('language') language: string,
    @Param('utility') utility: string
  ) {
    this.logger.log(getHttpRequestInfo(req, res), UtilitiesController.name);

    res.json(
      await this.utilitiesService.getSpecificUtilityInfo({
        platform,
        language,
        utility,
      })
    );
  }
}
