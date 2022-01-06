import {UserModel, User} from "../entities/user";
import {UserFileModel} from "../entities/user-file";

export class UserRepository {
    public async create(user: User): Promise<User> {
        return UserModel.create(user);
    }

    public async findByEmail(email: string): Promise<User | null> {
        return await UserModel.findOne({
            email: email,
        })
            .exec()
    }
}