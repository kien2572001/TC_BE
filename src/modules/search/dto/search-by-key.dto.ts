import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class V1SearchByKeyQueryDto {
  @ApiProperty({
    description: 'Keyword',
    example: 'Restaurant',
    type: 'string',
    format: 'string',
  })
  @IsString()
  keyword: string;
}
