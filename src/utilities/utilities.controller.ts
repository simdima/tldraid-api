import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { UtilitiesService } from './utilities.service';
import { GetUtilitiesDto } from './dto/get-utilities.dto';

@Controller('utilities')
export class UtilitiesController {
  constructor(private readonly utilitiesService: UtilitiesService) {}

  @Get(':platform')
  findAll(@Param(new ValidationPipe()) params: GetUtilitiesDto) {
    return this.utilitiesService.getAllForCurrentPlatform(params.platform);
  }

  @Get(':platform/:language/:utility')
  findSpecificUtility(
    @Param(new ValidationPipe()) { platform }: GetUtilitiesDto,
    @Param('language') language: string,
    @Param('utility') utility: string
  ) {
    return this.utilitiesService.getSpecificUtilityInfo({
      platform,
      language,
      utility,
    });
  }
}
