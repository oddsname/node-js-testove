import {User} from "../entities/user";
import {ObjectID} from "typeorm";


export interface UserPayload {
    id: ObjectID,
    email: string,
    name: string
}


export class UserJwtPayload {
    constructor(
        private user: User,
    ) {
    }

    public getPayload(): UserPayload {
        return {
            id: this.user._id,
            email: this.user.email,
            name: this.user.name,
        }
    }
}