import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertRootInUser1727221786307 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            INSERT INTO public."user"(
                name, email, type_user, cpf, password)
                VALUES ('root', 'root@root.com', 2, 12312312312, '$2b$10$s4YzO/haBFKWaA5Xroh65O3b8VaE7DDZtB9WU5SHPaocxhLmStM/q');
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM public."user"
            WHERE email like 'root@root.com';
    `);
  }
}
