import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class V1Restaurant {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsString()
  photoUrl: string;

  @Expose()
  @IsString()
  activeTime: string;

  @Expose()
  @IsBoolean()
  isDraft: boolean;
}

export class V1GetRestaurantByName {
  @Expose()
  @Type(() => V1Restaurant)
  restaurants: V1Restaurant[];

  @Expose()
  @IsNumber()
  total: number;
}
