import {getRepository, ObjectID, Repository} from "typeorm";
import {User} from '../entities/user';

export class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    query(): Repository<User>
    {
        return this.repository;
    }

    public async findByEmail(email: string): Promise<User | undefined>
    {
        return this.repository.findOne({
            email,
        })
    }

    public async save(user: User): Promise<void>
    {
        await this.repository.save(user);
    }

}