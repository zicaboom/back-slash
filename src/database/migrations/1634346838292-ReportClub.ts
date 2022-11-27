import {MigrationInterface, QueryRunner} from "typeorm";

export class ReportClub1634346838292 implements MigrationInterface {
    name = 'ReportClub1634346838292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_5231b4a71b737fdeb5bdce5f84a`");
        await queryRunner.query("ALTER TABLE `clubs` DROP COLUMN `approved`");
        await queryRunner.query("ALTER TABLE `clubs` DROP COLUMN `approvedById`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `clubs` ADD `approvedById` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `clubs` ADD `approved` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_5231b4a71b737fdeb5bdce5f84a` FOREIGN KEY (`approvedById`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE");
    }

}
