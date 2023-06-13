import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

class V1FoodByNameRestaurant {
  @ApiProperty({
    type: 'number',
    description: 'Restaurant id',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  id: number;

  @ApiProperty({
    type: 'string',
    description: 'Restaurant name',
    format: 'string',
  })
  @Expose()
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'Restaurant address',
    format: 'string',
  })
  @Expose()
  @IsString()
  address: string;

  @ApiProperty({
    type: 'string',
    description: 'Restaurant image url',
    format: 'string',
  })
  @Expose()
  @IsString()
  photoUrl: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'Restaurant active time',
    format: 'string',
  })
  @Expose()
  @IsString()
  activeTime: string;
}
export class V1FoodDetailByName {
  @ApiProperty({
    type: 'number',
    description: 'Food id',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  id: number;

  @ApiProperty({
    type: 'string',
    description: 'Food name',
    format: 'string',
  })
  @Expose()
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'Food photo url',
    format: 'string',
  })
  @Expose()
  @IsString()
  photoUrl: string;

  @ApiProperty({
    type: 'boolean',
    description: 'Is food',
    format: 'boolean',
  })
  @Expose()
  @IsBoolean()
  isFood: boolean;

  @ApiProperty({
    type: 'string',
    description: 'Food photo url',
    format: 'string',
  })
  @Expose()
  @IsString()
  description: string;

  @ApiProperty({
    type: 'number',
    description: 'Rating food',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  rating: number;

  @ApiProperty({
    type: V1FoodByNameRestaurant,
    description: 'Restaurant',
  })
  @Type(() => V1FoodByNameRestaurant)
  @Expose()
  restaurant: V1FoodByNameRestaurant;
}

export class V1FoodByName {
  @ApiProperty({ type: [V1FoodDetailByName], description: 'Food' })
  @Expose()
  @Type(() => V1FoodDetailByName)
  foods: V1FoodDetailByName[];

  @ApiProperty({ type: 'number', description: 'Total' })
  @Expose()
  @IsNumber()
  total: number;
}
