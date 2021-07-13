import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Club } from "./Club";
import { Question } from "./Question";

@Entity("question_clubs")
class QuestionClub {
    @PrimaryColumn()
    id: string

    @Column()
    club_id: string

    @Column()
    question_id: string

    @JoinColumn({ name: "club_id" })
    @ManyToOne(() => Club)
    clubId: Club

    @JoinColumn({ name: "question_id" })
    @ManyToOne(() => Question)
    questionId: Question

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { QuestionClub };