import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class V1PostRestaurantBodyDto {
  @ApiProperty({ example: 'Viet Restaurant', type: 'string', format: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Ha Noi, Long Bien',
    type: 'string',
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    example:
      'https://i.pinimg.com/736x/d6/78/2c/d6782c36736ab2ba808986936628e033.jpg',
    type: 'string',
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  photoUrl: string;

  @ApiProperty({ example: '9:00 AM', type: 'string', format: 'string' })
  @IsNotEmpty()
  @IsString()
  activeTime: string;

  @ApiProperty({ example: true, type: 'boolean', format: 'boolean' })
  @IsNotEmpty()
  @IsBoolean()
  isDraft: boolean;
}
