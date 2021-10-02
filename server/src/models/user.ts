import {Schema, model, Model, Document} from "mongoose";

interface UserInterface extends Document {
    name: string;
    email: string;
    password: string,
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

export const User: Model<UserInterface> = model<UserInterface>('User', userSchema);
