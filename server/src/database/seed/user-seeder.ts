import {UserModel} from "../../domain/user/entities/user";
import {Inject} from "typescript-ioc";
import {HashService} from "../../infrastructure/services/hash-service";
import {Connection} from "mongoose"
import {FileModel} from "../../domain/files/entities/file";
import {UserFileModel} from "../../domain/user/entities/user-file";
import {FileRepository} from "../../domain/files/repositories/file-repository";
import {UserRepository} from "../../domain/user/repositories/user-repository";
import {UserFileRepository} from "../../domain/user/repositories/user-file-repository";

export default class UserSeeder {

    @Inject
    public hashService: HashService

    @Inject
    public fileRepository: FileRepository;

    @Inject
    public userRepository: UserRepository;

    @Inject
    public userFileRepository: UserFileRepository;

    public async run(connection: Connection) {

        const session = await connection.startSession()

        connection.db.dropDatabase();

        try {
            session.startTransaction();

            const file = new FileModel()

            file.name = 'test.jpg';
            file.disk = 'test';
            file.extension = 'jpg';
            file.original_name = 'parampampam.jpg';
            file.path = 'test.jpg';

            const createdFile = await this.fileRepository.create(file);

            const user = new UserModel();

            user.name = 'Admin';
            user.email = 'admin@example.net';
            user.password = await this.hashService.hash('password');

            const createdUser = await this.userRepository.create(user)

            const userFile = new UserFileModel()

            userFile.user = createdUser;
            userFile.file = createdFile;
            userFile.comment = 'tset';
            userFile.delete_date = new Date();

            await this.userFileRepository.create(userFile);
            session.commitTransaction();

        } catch (e) {
            session.abortTransaction()

            throw e;
        } finally {
            session.endSession();
        }
    }
}
