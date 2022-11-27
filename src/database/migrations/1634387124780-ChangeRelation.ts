import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeRelation1634387124780 implements MigrationInterface {
    name = 'ChangeRelation1634387124780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_bb15bb8c80ea4332b548343c3d2`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `reportsId`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` ADD `reportsId` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_bb15bb8c80ea4332b548343c3d2` FOREIGN KEY (`reportsId`) REFERENCES `clubs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
