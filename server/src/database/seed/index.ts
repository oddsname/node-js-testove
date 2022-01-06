import UserSeeder from "./user-seeder";
import {connectDB, getConnection} from "../index";

const seeders = [
    new UserSeeder,
]

connectDB();

const connection = getConnection();

console.log("Start running seeders \n")

async function runSeeders() {
    for(let i = 0; i < seeders.length; i++) {
        const seeder = seeders[i];

        console.log("Start: " + seeder.constructor.name + " \n")

        await seeder.run(connection)

        console.log(seeder.constructor.name + " seeded successfully \n")
    }
}

runSeeders().then(() => {
    process.exit(0);
})
