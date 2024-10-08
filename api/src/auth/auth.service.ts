import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { ReturnUserDto } from '../user/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { vaildatePassword } from '../utils/password';

@Injectable()
export class AuthService {
  // Injeção de dependência dos serviços necessários
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  // Método para realizar o login
  async login(loginDto: LoginDto): Promise<ReturnLogin> {
    const user: UserEntity | undefined = await this.userService
      // Buscar o usuário pelo e-mail fornecido
      .findUserByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await vaildatePassword(
      loginDto.password,
      user?.password || '',
    );

    if (!user || !isMatch) {
      throw new NotFoundException('Email or password invalid');
    }

    return {
      // Gerar um token de acesso e criar um objeto de retorno com as informações do usuário
      accessToken: this.jwtService.sign({ ...new LoginPayload(user) }),
      user: new ReturnUserDto(user),
    };
  }
}
