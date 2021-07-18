import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Answer } from "./Answer";
import { Club } from "./Club";
import { User } from "./User";

@Entity("questions")
class Question {
    @PrimaryColumn()
    id: string

    @Column()
    content: string

    @Column({default: false})
    denounced: boolean

    @ManyToMany(()=>User, User => User.liked_questions, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    likes: User[]

    @ManyToOne(() => User, User => User.questions, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    created_by: User

    @ManyToMany(() => Club, Club => Club.questions)
    @JoinTable({ name: "questions_clubs" })
    clubs: Club[]
    
    @OneToMany(()=>Answer, Answer => Answer.question)
    answers: Answer[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Question };