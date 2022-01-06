import {ClassMiddleware, Controller, Post} from "@overnightjs/core";
import {NextFunction, Request, Response} from "express";
import {RequestValidator} from "../../requests/decorators/request-validator";
import {Auth} from "../../middlewares/auth";
import {AppResponse} from "../../responses/app-response";
import {UserSaveFileParams} from "../../requests/params/user-save-file-params";
import {User} from "../../../domain/user/entities/user";
import {Inject} from "typescript-ioc";
import {UserFileService} from "../../../domain/user/services/user-file-service";

@Controller('api/user')
@ClassMiddleware([Auth])
export class UserFileController {

    @Inject
    private userFileService: UserFileService;

    @Post('file/save')
    @RequestValidator(new UserSaveFileParams())
    public async saveUserFile(req: Request, res: Response, next: NextFunction) {
        try {
            const file: File = req.files;
            const authUser = req.user;

           console.log(req.body.delete_date);

            return AppResponse.success(res);
        } catch (e) {
            next(e);
        }
    }

}