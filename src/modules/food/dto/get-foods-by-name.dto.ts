import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class V1GetFoodsByNameParamDto {
  @ApiProperty({
    description: 'Name of food',
    example: 'Pizza',
    type: 'string',
    format: 'string',
  })
  @IsString()
  name: string;
}
