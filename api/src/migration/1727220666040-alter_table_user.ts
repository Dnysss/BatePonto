import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1727220666040 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            alter table public.user add unique(email);
            alter table public.user add unique(cpf);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
