import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRegisterPointDTO } from './dtos/create-register-point.dto';
import { RegisterPointService } from './register-point.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { RegisterPointEntity } from './entities/register-point.entity';

@Controller('point')
export class RegisterPointController {
  constructor(private readonly registerPointService: RegisterPointService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createRegisterPoint(
    @Body() createRegisterPointDTO: CreateRegisterPointDTO,
    @UserId() userId: number,
  ): Promise<RegisterPointEntity> {
    return this.registerPointService.createRegisterPoint(
      createRegisterPointDTO,
      userId,
    );
  }

  @Get('/:userId')
  async getRegisterPointsByUser(
    @Param('userId') userId: number,
  ): Promise<RegisterPointEntity[]> {
    return this.registerPointService.getRegisterPointsByUser(userId);
  }
}
