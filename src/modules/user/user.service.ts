import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ERole } from 'src/core/enum/default.enum';
import { ErrorMessage } from 'src/core/enum/error.enum';
import { User } from 'src/database/entity/user.entity';
import {
  IJwtPayload,
  IResponseAuth,
  IResponseAuthUser,
  IResponseRefreshToken,
} from 'src/global/auth/interface/auth.interface';
import { DeepPartial, EntityManager, Like, Repository } from 'typeorm';
import { VRefreshToken } from './dto/refresh-token.dto';
import { VUserLoginDto } from './dto/user-login.dto';
import { VUserRegisterDto } from './dto/user-register.dto';
import { EConfiguration } from 'src/core/config/configuration.config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async userRegister(userRegister: VUserRegisterDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: userRegister.email,
      },
    });

    if (user) {
      throw new HttpException(
        ErrorMessage.ACCOUNT_EXISTS,
        HttpStatus.BAD_REQUEST,
      );
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(userRegister.password, salt);

    userRegister.password = hashPassword;
    userRegister.role = ERole.USER;
    const newUser = await this.userRepository.save(userRegister);
    delete newUser.password;
    return newUser;
  }

  async userLogin(userLogin: VUserLoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: userLogin.email,
      },
    });
    if (!user) {
      throw new HttpException(
        ErrorMessage.ACCOUNT_NOT_EXISTS,
        HttpStatus.BAD_REQUEST,
      );
    }

    const isMatch = await bcrypt.compare(userLogin.password, user.password);

    if (!isMatch) {
      throw new HttpException(
        ErrorMessage.PASSWORD_INCORRECT,
        HttpStatus.BAD_REQUEST,
      );
    }

    const authUserData: IResponseAuthUser = {
      id: user.id,
      email: user.email,
      avatar: user.avatar,
      name: user.name,
      role: user.role,
    };

    return this.returnResponseAuthUser(authUserData);
  }

  async refreshToken(body: VRefreshToken): Promise<IResponseRefreshToken> {
    const user = await this.userRepository.findOne({
      where: {
        refreshToken: body.refreshToken,
      },
    });

    if (!user) {
      throw new HttpException(
        ErrorMessage.ACCOUNT_NOT_EXISTS,
        HttpStatus.BAD_REQUEST,
      );
    }

    const authUserData: IResponseAuthUser = {
      id: user.id,
      email: user.email,
      avatar: user.avatar,
      name: user.name,
      role: user.role,
    };

    const data = await this.returnResponseAuthUser(authUserData);

    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  }

  async returnResponseAuthUser(
    authUserData: IResponseAuthUser,
  ): Promise<IResponseAuth> {
    const payload: IJwtPayload = {
      id: authUserData.id,
      email: authUserData.email,
      name: authUserData.name,
      role: authUserData.role,
    };

    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: this.configService.get<number>(
        EConfiguration.REFRESH_TOKEN_EXPIRES_IN,
      ),
    });

    await this.userRepository.update(authUserData.id, { refreshToken });

    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken,
      user: authUserData,
    };
  }

  async getAllUser() {
    const userList = await this.userRepository.find();

    return userList.map((user) => {
      delete user.password;
      delete user.refreshToken;
      return user;
    });
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }
  async getProfileUser(req) {
    const { id } = req.user;
    const userRaw = await this.userRepository.findOne({ where: { id } });
    if (!userRaw) {
      return {
        message: 'Not found user',
      };
    }
    const user = {
      id: userRaw.id,
      name: userRaw.name,
      email: userRaw.email,
      avatar: userRaw.avatar,
      password: userRaw.password,
    };
    const result = {
      message: 'Success',
      user,
    };
    return result;
  }

  async updateProfileUser(body, req) {
    const { id } = req.user;
    const { name, email, avatar, password } = body;
    const salt = await bcrypt.genSalt();
    let hashPassword = null;
    if (password) hashPassword = await bcrypt.hash(password, salt);

    if (!id) {
      return {
        message: 'Failed',
      };
    }

    const user = await this.userRepository.findOne({ where: { id } });

    if (user) {
      if (name) user.name = name;
      if (email) user.email = email;
      if (avatar) user.avatar = avatar;
      if (password) user.password = hashPassword;
      await this.userRepository.save(user);
      return {
        message: 'Success',
        user,
      };
    }

    return {
      message: 'Failed',
    };
  }

  async updateUserById(
    id: string,
    data: DeepPartial<User>,
    entityManager?: EntityManager,
  ) {
    const userRepository = entityManager
      ? entityManager.getRepository(User)
      : this.userRepository;
    return await userRepository.update(id, data);
  }

  //Admin
  async getAllListUser(): Promise<any> {
    const users = await this.userRepository.find({
      where: {
        role: ERole.USER,
      },
    });
    return {
      users,
    };
  }

  async searchUser(query): Promise<any> {
    const { name } = query;
    const usersRaw = await this.userRepository.find({
      where: {
        name: Like(`%${name}%`),
        role: ERole.USER,
      },
    });

    return {
      users: usersRaw,
    };
  }

  async updateStatusUser(param, body): Promise<any> {
    const { id } = param;
    const { status } = body;

    const user = await this.userRepository.findOne({
      where: {
        id: id,
        role: ERole.USER,
      },
    });

    if (user) {
      user.status = status;
      await this.userRepository.save(user);
      return {
        message: 'Update user status success',
      };
    }

    return {
      message: 'User not found',
    };
  }
}
