import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
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
    approved: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


    @ManyToOne(() => User, User => User.created_clubs, {onDelete: "SET NULL", onUpdate:"CASCADE"})
    @JoinColumn({ name: "created_by" })
    created_by: User

    @ManyToOne(() => User, User => User.approved_clubs, {onDelete: "SET NULL", onUpdate:"CASCADE"})
    @JoinColumn({ name: "approved_by" })
    approved_by: User

    @ManyToMany(() => User, User => User.clubs, {onDelete:"CASCADE", onUpdate:"CASCADE"})
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