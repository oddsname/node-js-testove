import {Entity, Column, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column({type: "string"})
    name: string;

    @Column({type: "string"})
    email: string;

    @Column({type: "string"})
    password: string;

}