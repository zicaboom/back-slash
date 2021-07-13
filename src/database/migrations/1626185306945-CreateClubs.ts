import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClub1625579922846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clubs",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "created_by",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "approved",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "approved_by",
                        type: "varchar",
                        default: null,
                        isNullable: true
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
                        name: "FkUserCreateClub",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["created_by"],
                        onDelete: "SET NULL",
                        onUpdate: "NO ACTION"
                    },
                    {
                        name: "FkUserApproveClub",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["approved_by"],
                        onDelete: "SET NULL",
                        onUpdate: "NO ACTION"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clubs");
    }

}
