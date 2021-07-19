import {MigrationInterface, QueryRunner} from "typeorm";

export class LikeAnswers1626732954938 implements MigrationInterface {
    name = 'LikeAnswers1626732954938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users_likes_answers` (`usersId` varchar(255) NOT NULL, `answersId` varchar(255) NOT NULL, INDEX `IDX_82356a5e0ded0f1c79afee43fa` (`usersId`), INDEX `IDX_ca404b9f2c978d031511909a40` (`answersId`), PRIMARY KEY (`usersId`, `answersId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users_likes_answers` ADD CONSTRAINT `FK_82356a5e0ded0f1c79afee43fac` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `users_likes_answers` ADD CONSTRAINT `FK_ca404b9f2c978d031511909a404` FOREIGN KEY (`answersId`) REFERENCES `answers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_likes_answers` DROP FOREIGN KEY `FK_ca404b9f2c978d031511909a404`");
        await queryRunner.query("ALTER TABLE `users_likes_answers` DROP FOREIGN KEY `FK_82356a5e0ded0f1c79afee43fac`");
        await queryRunner.query("DROP INDEX `IDX_ca404b9f2c978d031511909a40` ON `users_likes_answers`");
        await queryRunner.query("DROP INDEX `IDX_82356a5e0ded0f1c79afee43fa` ON `users_likes_answers`");
        await queryRunner.query("DROP TABLE `users_likes_answers`");
    }

}
