import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class V1PostFoodsDto {
  @ApiProperty({ example: 'Kem', type: 'string', format: 'string' })
  @IsString()
  name: string;

  @ApiProperty({
    example:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXsSUOo1IutAqh9dU5xtjo0XLOkqeFrtTFQ&usqp=CAU',
    type: 'string',
    format: 'string',
  })
  @IsString()
  photoUrl: string;

  @ApiProperty({ example: 10000, type: 'number', format: 'number' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 1, type: 'number', format: 'number' })
  @IsNumber()
  restaurantId: number;

  @ApiProperty({ example: false, type: 'boolean', format: 'boolean' })
  @IsBoolean()
  isDraft: boolean;

  @ApiProperty({ example: true, type: 'boolean', format: 'boolean' })
  @IsBoolean()
  isFood: boolean;

  @ApiProperty({ example: 'Kem ngon', type: 'string', format: 'string' })
  @IsString()
  description: string;
}
