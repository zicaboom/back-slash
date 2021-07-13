import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("questions")
class Question {
    @PrimaryColumn()
    id: string

    @Column()
    content: string

    @Column()
    created_by: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @JoinColumn({ name: "created_by" })
    @ManyToOne(() => User)
    createdBy: User

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Question };