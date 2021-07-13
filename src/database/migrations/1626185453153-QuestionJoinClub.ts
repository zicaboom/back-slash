import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class QuestionClubs1625487696774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "question_clubs",
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
                        name: "question_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FkClubQuestionJoined",
                        referencedTableName: "clubs",
                        referencedColumnNames: ["id"],
                        columnNames: ["club_id"],
                        onDelete: "CASCADE",
                        onUpdate: "NO ACTION"
                    },
                    {
                        name: "FkQuestionClubJoin",
                        referencedTableName: "questions",
                        referencedColumnNames: ["id"],
                        columnNames: ["question_id"],
                        onDelete: "CASCADE",
                        onUpdate: "NO ACTION"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("question_clubs");
    }
}
