import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1626273320953 implements MigrationInterface {
    name = "CreateTables1626273320953"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `admin` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `questions` (`id` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `created_by` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `clubs` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `approved` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `created_by` varchar(255) NULL, `approved_by` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users_clubs` (`usersId` varchar(255) NOT NULL, `clubsId` varchar(255) NOT NULL, INDEX `IDX_dcd88e0ea6b8dd79a074c26be4` (`usersId`), INDEX `IDX_83ba525082eecd7ce291df9bf2` (`clubsId`), PRIMARY KEY (`usersId`, `clubsId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `questions_clubs` (`questionsId` varchar(255) NOT NULL, `clubsId` varchar(255) NOT NULL, INDEX `IDX_1f96ed6e44324601fb55efc667` (`questionsId`), INDEX `IDX_89a8d2994927045cf950e8eb6d` (`clubsId`), PRIMARY KEY (`questionsId`, `clubsId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `questions` ADD CONSTRAINT `FK_7d0fdceddfeebcc65d61b2f4c70` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_5849c8d27b8a49456a50ba9ff8d` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_e72de387f96dde901458d0aa67c` FOREIGN KEY (`approved_by`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `users_clubs` ADD CONSTRAINT `FK_dcd88e0ea6b8dd79a074c26be49` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `users_clubs` ADD CONSTRAINT `FK_83ba525082eecd7ce291df9bf2b` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `questions_clubs` ADD CONSTRAINT `FK_1f96ed6e44324601fb55efc6672` FOREIGN KEY (`questionsId`) REFERENCES `questions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `questions_clubs` ADD CONSTRAINT `FK_89a8d2994927045cf950e8eb6df` FOREIGN KEY (`clubsId`) REFERENCES `clubs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `questions_clubs` DROP FOREIGN KEY `FK_89a8d2994927045cf950e8eb6df`");
        await queryRunner.query("ALTER TABLE `questions_clubs` DROP FOREIGN KEY `FK_1f96ed6e44324601fb55efc6672`");
        await queryRunner.query("ALTER TABLE `users_clubs` DROP FOREIGN KEY `FK_83ba525082eecd7ce291df9bf2b`");
        await queryRunner.query("ALTER TABLE `users_clubs` DROP FOREIGN KEY `FK_dcd88e0ea6b8dd79a074c26be49`");
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_e72de387f96dde901458d0aa67c`");
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_5849c8d27b8a49456a50ba9ff8d`");
        await queryRunner.query("ALTER TABLE `questions` DROP FOREIGN KEY `FK_7d0fdceddfeebcc65d61b2f4c70`");
        await queryRunner.query("DROP INDEX `IDX_89a8d2994927045cf950e8eb6d` ON `questions_clubs`");
        await queryRunner.query("DROP INDEX `IDX_1f96ed6e44324601fb55efc667` ON `questions_clubs`");
        await queryRunner.query("DROP TABLE `questions_clubs`");
        await queryRunner.query("DROP INDEX `IDX_83ba525082eecd7ce291df9bf2` ON `users_clubs`");
        await queryRunner.query("DROP INDEX `IDX_dcd88e0ea6b8dd79a074c26be4` ON `users_clubs`");
        await queryRunner.query("DROP TABLE `users_clubs`");
        await queryRunner.query("DROP TABLE `clubs`");
        await queryRunner.query("DROP TABLE `questions`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
