import {Schema, model, Model} from "mongoose"

const fileSchema = new Schema({
    disk: String,
    extension: String,
    name: String,
    path: String,
    original_name: String,
})

export interface File {
    _id: Schema.Types.ObjectId,
    disk: string,
    extension: string,
    name: string,
    path: string,
    original_name: string,
}

export const FILE_MODEL_NAME = 'file'

export const FileModel: Model<File> = model(FILE_MODEL_NAME, fileSchema);