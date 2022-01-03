import {NextFunction, Request, Response} from "express";
import {AppResponse} from "../responses/app-response";
import {Controller, Post} from "@overnightjs/core";
import {Inject} from "typescript-ioc";
import {LoginParams} from "../requests/login-params";
import {RequestValidator} from "../requests/request-validator";
import {AuthService} from "../../domain/auth/services/auth-service";
import {HeadersService} from "../services/headers-service";
import {UserTransformer} from "../tranformers/user-transformer";

@Controller('api/auth')
export class AuthController {
    @Inject
    public authService: AuthService
    @Inject
    public headersService: HeadersService;

    @Post('login')
    @RequestValidator(new LoginParams)
    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const {token} = await this.authService.loginUser(req.body.email, req.body.password)

            return AppResponse.success(res, {
                token,
            })
        } catch (e) {
            return next(e);
        }
    }

    @Post('check')
    public async checkAuth(req: Request, res: Response, next: NextFunction) {
        try {
            const token = this.headersService.getAuthToken(req)
            const user = await this.authService.checkUser(token)

            return AppResponse.success(res, {
                user: UserTransformer.single(user)
            })
        } catch (e) {
            return next(e);
        }
    }
}