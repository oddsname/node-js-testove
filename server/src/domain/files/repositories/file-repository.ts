import {Model} from "mongoose";
import {File, FileModel} from "../entities/file";

export class FileRepository {

    public create(file: File): Promise<File>
    {
        return FileModel.create(file);
    }
}