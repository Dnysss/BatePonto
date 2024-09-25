import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterPointEntity } from './entities/register-point.entity';

import { Repository } from 'typeorm';
import { CreateRegisterPointDTO } from './dtos/create-register-point.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RegisterPointService {
  constructor(
    @InjectRepository(RegisterPointEntity)
    private readonly registerPointRepository: Repository<RegisterPointEntity>,
    private readonly userService: UserService,
  ) {}

  // Cria o registro de ponto
  async createRegisterPoint(
    createRegisterPointDTO: CreateRegisterPointDTO,
    userId: number,
  ): Promise<RegisterPointEntity> {
    await this.userService.findUserById(userId);

    /* const registerPoint = this.registerPointRepository.create({
      userId,
      data_hora: new Date(),
      address: createRegisterPointDTO.address,
      photo_url: createRegisterPointDTO.photo_url,
    });

    return this.registerPointRepository.save(registerPoint); */

    return this.registerPointRepository.save({
      ...createRegisterPointDTO,
      userId,
    });
  }

  // Busca registros de ponto por usuário
  async getRegisterPointsByUser(
    userId: number,
  ): Promise<RegisterPointEntity[]> {
    const registerPoints = await this.registerPointRepository.find({
      where: { userId },
      order: { data_hora: 'DESC' },
    });

    if (!registerPoints || registerPoints.length === 0) {
      throw new NotFoundException(
        'Registros de ponto não encontrados para o usuário',
      );
    }

    return registerPoints;
  }
}
