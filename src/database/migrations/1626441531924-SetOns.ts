import { MigrationInterface, QueryRunner } from "typeorm";

export class SetOns1626441531924 implements MigrationInterface {
    name = "SetOns1626441531924"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `questions` DROP FOREIGN KEY `FK_7d0fdceddfeebcc65d61b2f4c70`");
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_5849c8d27b8a49456a50ba9ff8d`");
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_e72de387f96dde901458d0aa67c`");
        await queryRunner.query("ALTER TABLE `questions` ADD CONSTRAINT `FK_7d0fdceddfeebcc65d61b2f4c70` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_5849c8d27b8a49456a50ba9ff8d` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_e72de387f96dde901458d0aa67c` FOREIGN KEY (`approved_by`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_e72de387f96dde901458d0aa67c`");
        await queryRunner.query("ALTER TABLE `clubs` DROP FOREIGN KEY `FK_5849c8d27b8a49456a50ba9ff8d`");
        await queryRunner.query("ALTER TABLE `questions` DROP FOREIGN KEY `FK_7d0fdceddfeebcc65d61b2f4c70`");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_e72de387f96dde901458d0aa67c` FOREIGN KEY (`approved_by`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `clubs` ADD CONSTRAINT `FK_5849c8d27b8a49456a50ba9ff8d` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `questions` ADD CONSTRAINT `FK_7d0fdceddfeebcc65d61b2f4c70` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
