import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class V1PostReviewBodyDto {
  @ApiProperty({
    example: '5',
    type: 'number',
    format: 'number',
  })
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @ApiProperty({
    example: 'The food is delicious',
    type: 'string',
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  content: string;
}
