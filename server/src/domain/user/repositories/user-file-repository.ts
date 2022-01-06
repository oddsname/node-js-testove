import {UserFileModel, UserFile} from "../entities/user-file";
import {User} from "../entities/user";
import {File} from "../../files/entities/file";

export class UserFileRepository {

    public async create(user: User, file: File, comment: string, deleteDate: Date): Promise<UserFile>
    {
        return UserFileModel.create({
            user: user,
            file: file,
            comment: comment,
            delete_date: deleteDate,
        });
    }
}