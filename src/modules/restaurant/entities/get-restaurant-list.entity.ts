import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class V2Restaurant {
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

  @ApiPropertyOptional({
    type: 'number',
    description: 'Restaurant average rating',
    format: 'number',
  })
  @Expose()
  @IsNumber()
  rating: number;
}

export class V2GetRestaurantList {
  @ApiProperty({ type: [V2Restaurant], description: 'Restaurant' })
  @Expose()
  @Type(() => V2Restaurant)
  restaurants: V2Restaurant[];

  @ApiProperty({ type: 'number', description: 'Total' })
  @Expose()
  @IsNumber()
  total: number;
}
