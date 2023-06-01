import { Expose } from 'class-transformer';

export class UserInfoDto {
  @Expose()
  id: string;

  @Expose()
  userName: string;

  @Expose()
  email: string;
}
