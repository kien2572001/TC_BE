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

  @ApiProperty({
    type: 'boolean',
    description: 'Is restaurant draft',
    format: 'string',
  })
  @Expose()
  @IsBoolean()
  isDraft: boolean;
}
class V1FoodByNameReview {
  @ApiProperty({
    type: 'number',
    description: 'Review id',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  id: number;

  @ApiProperty({
    type: 'number',
    description: 'Review rate',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  rate: number;

  @ApiProperty({
    type: 'string',
    description: 'Review content',
    format: 'string',
  })
  @Expose()
  @IsString()
  content: string;

  @ApiProperty({
    type: 'number',
    description: 'Food id',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  foodId: number;

  @ApiProperty({
    type: 'number',
    description: 'Restaurant id',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  restaurantId: number;

  @ApiProperty({
    type: 'number',
    description: 'User id',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  userId: number;
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
    description: 'Is food draft',
    format: 'string',
  })
  @Expose()
  @IsBoolean()
  isDraft: boolean;

  @ApiProperty({
    type: 'boolean',
    description: 'Is food',
    format: 'string',
  })
  @Expose()
  @IsBoolean()
  isFood: boolean;

  @ApiProperty({
    type: V1FoodByNameRestaurant,
    description: 'Restaurant',
  })
  @Type(() => V1FoodByNameRestaurant)
  @Expose()
  restaurant: V1FoodByNameRestaurant;

  @ApiProperty({
    type: [V1FoodByNameReview],
    description: 'Reviews',
  })
  @Type(() => V1FoodByNameReview)
  @Expose()
  reviews: V1FoodByNameReview[];
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
