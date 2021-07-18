import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1626524944384 implements MigrationInterface {
    name = "CreateDatabase1626524944384"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `admin` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `clubs` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `approved` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdById` varchar(255) NULL, `approvedById` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `questions` (`id` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `denounced` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdById` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `answers` (`id` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdById` varchar(255) NULL, `questionId` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users_likes_questions` (`usersId` varchar(255) NOT NULL, `questionsId` varchar(255) NOT NULL, INDEX `IDX_f0abe307a0d862a4a5ebf5e70f` (`usersId`), INDEX `IDX_6635290a65b050afb2681c8d81` (`questionsId`), PRIMARY KEY (`usersId`, `questionsId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users_clubs` (`usersId` varchar(255) NOT NULL, `clubsId` varchar(255) NOT NULL, INDEX `IDX_dcd88e0ea6b8dd79a074c26be4` (`usersId`), INDEX `IDX_83ba525082eecd7ce291df9bf2` (`clubsId`), PRIMARY KEY (`usersId`, `clubsId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `questions_clubs` (`questionsId` varchar(255) NOT NULL, `clubsId` varchar(255) NOT NULL, INDEX `IDX_1f96ed6e44324601fb55efc667` (`questionsId`), INDEX `IDX_89a8d2994927045cf950e8eb6d` (`clubsId`), PRIMARY KEY (`questionsId`, `clubsId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_d34e54a8b82db529578e47e7e7f` FOREIGN KEY (`createdById`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_5231b4a71b737fdeb5bdce5f84a` FOREIGN KEY (`approvedById`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `questions` ADD CONSTRAINT `FK_0483ccbf84f12cc70caff7b9075` FOREIGN KEY (`createdById`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `answers` ADD CONSTRAINT `FK_401367b2d1e72479e24772ae7a0` FOREIGN KEY (`createdById`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `answers` ADD CONSTRAINT `FK_c38697a57844f52584abdb878d7` FOREIGN KEY (`questionId`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `users_likes_questions` ADD CONSTRAINT `FK_f0abe307a0d862a4a5ebf5e70fe` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `users_likes_questions` ADD CONSTRAINT `FK_6635290a65b050afb2681c8d81d` FOREIGN KEY (`questionsId`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `users_clubs` ADD CONSTRAINT `FK_dcd88e0ea6b8dd79a074c26be49` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `users_clubs` ADD CONSTRAINT `FK_83ba525082eecd7ce291df9bf2b` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `questions_clubs` ADD CONSTRAINT `FK_1f96ed6e44324601fb55efc6672` FOREIGN KEY (`questionsId`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `questions_clubs` ADD CONSTRAINT `FK_89a8d2994927045cf950e8eb6df` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `questions_clubs` DROP FOREIGN KEY `FK_89a8d2994927045cf950e8eb6df`");
        await queryRunner.query("ALTER TABLE `questions_clubs` DROP FOREIGN KEY `FK_1f96ed6e44324601fb55efc6672`");
        await queryRunner.query("ALTER TABLE `users_clubs` DROP FOREIGN KEY `FK_83ba525082eecd7ce291df9bf2b`");
        await queryRunner.query("ALTER TABLE `users_clubs` DROP FOREIGN KEY `FK_dcd88e0ea6b8dd79a074c26be49`");
        await queryRunner.query("ALTER TABLE `users_likes_questions` DROP FOREIGN KEY `FK_6635290a65b050afb2681c8d81d`");
        await queryRunner.query("ALTER TABLE `users_likes_questions` DROP FOREIGN KEY `FK_f0abe307a0d862a4a5ebf5e70fe`");
        await queryRunner.query("ALTER TABLE `answers` DROP FOREIGN KEY `FK_c38697a57844f52584abdb878d7`");
        await queryRunner.query("ALTER TABLE `answers` DROP FOREIGN KEY `FK_401367b2d1e72479e24772ae7a0`");
        await queryRunner.query("ALTER TABLE `questions` DROP FOREIGN KEY `FK_0483ccbf84f12cc70caff7b9075`");
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_5231b4a71b737fdeb5bdce5f84a`");
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_d34e54a8b82db529578e47e7e7f`");
        await queryRunner.query("DROP INDEX `IDX_89a8d2994927045cf950e8eb6d` ON `questions_clubs`");
        await queryRunner.query("DROP INDEX `IDX_1f96ed6e44324601fb55efc667` ON `questions_clubs`");
        await queryRunner.query("DROP TABLE `questions_clubs`");
        await queryRunner.query("DROP INDEX `IDX_83ba525082eecd7ce291df9bf2` ON `users_clubs`");
        await queryRunner.query("DROP INDEX `IDX_dcd88e0ea6b8dd79a074c26be4` ON `users_clubs`");
        await queryRunner.query("DROP TABLE `users_clubs`");
        await queryRunner.query("DROP INDEX `IDX_6635290a65b050afb2681c8d81` ON `users_likes_questions`");
        await queryRunner.query("DROP INDEX `IDX_f0abe307a0d862a4a5ebf5e70f` ON `users_likes_questions`");
        await queryRunner.query("DROP TABLE `users_likes_questions`");
        await queryRunner.query("DROP TABLE `answers`");
        await queryRunner.query("DROP TABLE `questions`");
        await queryRunner.query("DROP TABLE `clubs`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
