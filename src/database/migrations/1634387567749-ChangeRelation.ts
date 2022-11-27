import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeRelation1634387567749 implements MigrationInterface {
    name = 'ChangeRelation1634387567749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_7c4057dac7751b6e5f7bba6de89`");
        await queryRunner.query("ALTER TABLE `clubs` DROP COLUMN `reportsId`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `clubs` ADD `reportsId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_7c4057dac7751b6e5f7bba6de89` FOREIGN KEY (`reportsId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

}
