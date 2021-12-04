import {getRepository, Repository} from "typeorm";
import {User} from "../entity/user";

export class UserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

     public async save(user: User): Promise<void>
    {
        await this.repository.save(user);
    }

}