import { UserEntity } from "../entities/user.entity";


export class ReturnUserDto {
  id: number;
  name: string;
  cpf: string;
  email: string;

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.cpf = userEntity.cpf;
  }
}
