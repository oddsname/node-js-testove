import {User} from "../../user/entities/user";
import {Schema} from "mongoose";

export interface UserPayload {
    id: Schema.Types.ObjectId,
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