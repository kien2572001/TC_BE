import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class V1GetReviewsByUserIdParamDto {
  @ApiProperty({
    description: 'User ID',
    example: 1,
    type: 'string',
    format: 'string',
  })
  @IsString()
  userId: string;
}
