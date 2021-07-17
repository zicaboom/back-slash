import {MigrationInterface, QueryRunner} from "typeorm";

export class Cascades1626522099228 implements MigrationInterface {
    name = 'Cascades1626522099228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_clubs` DROP FOREIGN KEY `FK_83ba525082eecd7ce291df9bf2b`");
        await queryRunner.query("ALTER TABLE `questions_clubs` DROP FOREIGN KEY `FK_89a8d2994927045cf950e8eb6df`");
        await queryRunner.query("ALTER TABLE `users_clubs` ADD CONSTRAINT `FK_83ba525082eecd7ce291df9bf2b` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `questions_clubs` ADD CONSTRAINT `FK_89a8d2994927045cf950e8eb6df` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `questions_clubs` DROP FOREIGN KEY `FK_89a8d2994927045cf950e8eb6df`");
        await queryRunner.query("ALTER TABLE `users_clubs` DROP FOREIGN KEY `FK_83ba525082eecd7ce291df9bf2b`");
        await queryRunner.query("ALTER TABLE `questions_clubs` ADD CONSTRAINT `FK_89a8d2994927045cf950e8eb6df` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `users_clubs` ADD CONSTRAINT `FK_83ba525082eecd7ce291df9bf2b` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
