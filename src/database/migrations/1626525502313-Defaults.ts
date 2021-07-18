import { MigrationInterface, QueryRunner } from "typeorm";

export class Defaults1626525502313 implements MigrationInterface {
    name = "Defaults1626525502313"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `questions` CHANGE `denounced` `denounced` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `questions` CHANGE `denounced` `denounced` tinyint NOT NULL");
    }

}
