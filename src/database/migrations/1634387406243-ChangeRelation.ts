import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeRelation1634387406243 implements MigrationInterface {
    name = 'ChangeRelation1634387406243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `clubs` ADD `reportsId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_7c4057dac7751b6e5f7bba6de89` FOREIGN KEY (`reportsId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_7c4057dac7751b6e5f7bba6de89`");
        await queryRunner.query("ALTER TABLE `clubs` DROP COLUMN `reportsId`");
    }

}
