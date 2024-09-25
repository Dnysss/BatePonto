import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableRegisterPoint1727263707477
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE public.register_point (
                id integer NOT NULL,
                user_id integer NOT NULL,
                data_hora timestamp without time zone,
                address character varying NOT NULL,
                photo_url character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (user_id) references public.user(id)
            );
            CREATE SEQUENCE public.register_point_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.register_point_id_seq OWNED BY public.register_point.id;

            ALTER TABLE ONLY public.register_point ALTER COLUMN id SET DEFAULT nextval('public.register_point_id_seq'::regclass);
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE public.register_point;
        `);
  }
}
