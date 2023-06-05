import { IsString } from 'class-validator';

export class V1GetRestaurantByNameParamDto {
  @IsString()
  name: string;
}
