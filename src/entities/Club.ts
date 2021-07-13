import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("clubs")
class Club {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    created_by: string

    @Column()
    approved: boolean

    @Column()
    @Exclude()
    approved_by: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @JoinColumn({ name: "created_by" })
    @ManyToOne(() => User)
    createdBy: User

    @JoinColumn({ name: "approved_by" })
    @ManyToOne(() => User)
    approvedBy: User

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export { Club };