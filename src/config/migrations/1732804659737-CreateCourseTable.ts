import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateCourseTable1732804659737 implements MigrationInterface {
  name = 'CreateCourseTable1732804659737'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "desiredCourse" character varying NOT NULL, "requiredCourse" character varying NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "course"`)
  }
}
