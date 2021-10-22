import {EntityRepository, MongoRepository} from "typeorm";
import {User} from "../entity/user";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User> {

}