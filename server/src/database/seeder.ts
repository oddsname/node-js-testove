import {connectDatabase} from "./db";
import {UserRepository} from "../repositories/user-repository";
import {User} from "../entity/user";
import {Inject} from "typescript-ioc";
import {HashService} from "../services/hash-service";


export class DatabaseSeeder {

    @Inject
    public userRepository: UserRepository;

    @Inject
    public hashService: HashService

    public async seed() {

        await connectDatabase();

        const user = new User();

        user.name = 'Admin';
        user.email = 'admin@example.net';
        user.password = await this.hashService.hash('password');


        await this.userRepository.save(user);
    }
}


const dbSeeder = new DatabaseSeeder();

dbSeeder.seed().then(() => {
    console.log("Database seeded successfully")
});
