import { Module } from '@nestjs/common';
import { RegisterPointService } from './register-point.service';
import { RegisterPointController } from './register-point.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterPointEntity } from './entities/register-point.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterPointEntity]), UserModule],
  providers: [RegisterPointService],
  controllers: [RegisterPointController],
  exports: [RegisterPointService],
})
export class RegisterPointModule {}
