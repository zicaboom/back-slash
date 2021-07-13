import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class JoinClubs1625441108803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_clubs",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "club_id",
                        type: "varchar"
                    },
                    {
                        name: "user_id",
                        type: "varchar"
                    },
                    {
                        name: "joined_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FkClubJoined",
                        referencedTableName: "clubs",
                        referencedColumnNames: ["id"],
                        columnNames: ["club_id"],
                        onDelete: "CASCADE",
                        onUpdate: "NO ACTION"
                    },
                    {
                        name: "FkUserJoin",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "NO ACTION"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_clubs");
    }
}