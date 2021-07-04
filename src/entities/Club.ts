import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
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
    created_at: string

    @JoinColumn({name: "created_by"})
    @ManyToOne(()=>User)
    createdBy: User

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
export { Club }