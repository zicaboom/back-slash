import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Club } from "./Club";
import { User } from "./User";

@Entity("questions")
class Question {
    @PrimaryColumn()
    id: string

    @Column()
    content: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, User => User.questions, {onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinColumn({name: "created_by"})
    created_by: User

    @ManyToMany(() => Club, Club => Club.questions, {onDelete: "CASCADE", onUpdate:"CASCADE"})
    @JoinTable({name: "questions_clubs"})
    clubs: Club[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Question };