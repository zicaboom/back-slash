import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Club } from "./Club";
import { Question } from "./Question";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    @Exclude()
    password: string

    @Exclude()
    @Column()
    admin: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Question, Question => Question.created_by)
    questions: Question[]

    @OneToMany(() => Club, Club => Club.created_by)
    created_clubs: Club[]

    @OneToMany(() => Club, Club => Club.approved_by)
    approved_clubs: Club[]

    @ManyToMany(() => Club, Club => Club.users)
    @JoinTable({ name: "users_clubs" })
    clubs: Club[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
