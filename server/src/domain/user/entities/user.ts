import {Schema, model, Model} from "mongoose"

const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
})

export interface User {
    _id: Schema.Types.ObjectId,
    name: string,
    email: string,
    password: string,
}

export const USER_MODEL_NAME = 'user';

export const UserModel: Model<User> = model(USER_MODEL_NAME, userSchema);