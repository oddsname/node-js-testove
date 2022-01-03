import {User} from "../../domain/auth/entities/user";
import {Inject} from "typescript-ioc";
import {HashService} from "../../infrastructure/services/hash-service";
import {Factory, Seeder} from "typeorm-seeding";
import {Connection} from "typeorm";

export default class UserSeeder implements Seeder {

    @Inject
    public hashService: HashService

    public async run(factory: Factory, connection: Connection) {
        const user = new User();

        user.name = 'Admin';
        user.email = 'admin@example.net';
        user.password = await this.hashService.hash('password');

        await connection.createEntityManager().save(user)
    }
}
