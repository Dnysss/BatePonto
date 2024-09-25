import { IsString } from 'class-validator';

export class createUserDTO {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  password: string;
}
