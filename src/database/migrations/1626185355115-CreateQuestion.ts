import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestion1625487662461 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "content",
                        type: "text"
                    },
                    {
                        name: "created_by",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FkUserCreateQuestion",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["created_by"],
                        onDelete: "CASCADE",
                        onUpdate: "NO ACTION"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("questions");
    }

}

