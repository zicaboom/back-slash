import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Question } from "./Question";
import { User } from "./User";

@Entity("answers")
class Answer {

    @PrimaryColumn()
    id: string 

    @Column()
    content: string 
  
    @ManyToOne(()=>User, User => User.answers, { onDelete: "CASCADE", onUpdate: "CASCADE", eager: true})
    created_by: User

    @ManyToMany(() => User, User => User.liked_answers, { onDelete: "CASCADE", onUpdate: "CASCADE", eager: true})
    likes:User[]

    @ManyToOne(()=>Question, Question => Question.answers, { onDelete: "CASCADE", onUpdate: "CASCADE"})
    question: Question

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

export { Answer };