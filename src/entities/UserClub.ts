import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Club } from "./Club";
import { User } from "./User";

@Entity("user_clubs")
export class UserClub {

    @PrimaryColumn()
    id:string

    @Column()
    user_id: string

    @Column()
    club_id: string

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=> User)
    userId: User

    @JoinColumn({name:"club_id"})
    @ManyToOne(()=>Club)
    clubId: Club

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
