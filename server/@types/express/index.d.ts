import {User} from "../../src/domain/user/entities/user";

declare global {
    namespace Express {
        export interface Request {
            user: User;
            files: File
        }
    }
}
