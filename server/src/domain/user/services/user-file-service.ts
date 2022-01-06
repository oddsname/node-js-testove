import {User} from "../entities/user";
import {File} from "../../files/entities/file";
import {Inject} from "typescript-ioc";
import {UserFileRepository} from "../repositories/user-file-repository";

export class UserFileService {

    constructor(
        @Inject private userFileRepository: UserFileRepository
    ) {
    }

    async createUserFile(user: User, file: File, comment: string, deleteDate: any) {
        console.log(deleteDate);
        // await this.userFileRepository.create(user, file, comment, deleteDate );
    }

}