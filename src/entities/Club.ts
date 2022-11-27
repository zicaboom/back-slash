import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Question } from "./Question";
import { User } from "./User";

@Entity("clubs")
class Club {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, User => User.created_clubs, {onDelete: "SET NULL", onUpdate:"CASCADE", eager: true})
    created_by: User

    @ManyToMany(() => User, User => User.reports ,{ onDelete: "CASCADE", onUpdate: "CASCADE"})
    @JoinTable({name: "reports"})
    reports: User[]

    @ManyToMany(() => User, User => User.clubs, {onDelete:"CASCADE", onUpdate:"CASCADE", eager: true})
    users: User[]

    @ManyToMany(() => Question, Question => Question.clubs, {onDelete:"CASCADE", onUpdate:"CASCADE"})
    questions: Question[]


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export { Club };