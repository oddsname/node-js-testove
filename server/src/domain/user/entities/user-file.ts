import {Schema, model, Model} from "mongoose"
import {User, USER_MODEL_NAME} from "./user";
import {File, FILE_MODEL_NAME} from "../../files/entities/file";

const userFileSchema = new Schema({
    comment: String,
    delete_date: Date,
    user: {type: Schema.Types.ObjectId, ref: USER_MODEL_NAME},
    file: {type: Schema.Types.ObjectId, ref: FILE_MODEL_NAME},
})

export interface UserFile {
    _id: Schema.Types.ObjectId,
    comment: string,
    delete_date: Date,
    user: User,
    file: File,
}

export const USER_FILE_MODEL_NAME = 'user_file';

export const UserFileModel: Model<UserFile> = model(USER_FILE_MODEL_NAME, userFileSchema);