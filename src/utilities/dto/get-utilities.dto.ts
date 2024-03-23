import { IsEnum, IsNotEmpty } from 'class-validator';

import { Platform } from '../utilities.service';

export class GetUtilitiesDto {
  @IsNotEmpty({ message: 'Platform parameter cannot be empty' })
  @IsEnum(['android', 'common', 'linux', 'osx', 'windows'], {
    message: 'Unknown platform',
  })
  platform: Platform;
}
