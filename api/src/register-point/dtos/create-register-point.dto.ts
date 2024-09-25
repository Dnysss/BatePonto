import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRegisterPointDTO {
  @IsNotEmpty()
  @IsString()
  data_hora: string;
  
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  photo_url: string;
}
