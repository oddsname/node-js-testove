import {Request, Response} from "express";
import {AppResponse} from "../responses/app-response";
import {Controller, Middleware, Post} from "@overnightjs/core";
import {Inject} from "typescript-ioc";
import {JwtService} from "../../services/jwt-service";
import {authMiddleware} from "../middlewares/auth-middleware";
import {LoginParams} from "../requests/login-params";
import {RequestValidator} from "../requests/request-validator";

@Controller('api/auth')
export class AuthController {
    @Inject
    private jwtService: JwtService;


    @Post('login')
    @RequestValidator(new LoginParams)
    public async login (req: Request, res: Response): Promise<Response> {
        console.log('passed');

        return AppResponse.success(res, req.body)
    }

    @Post('/check-auth')
    @Middleware([authMiddleware])
    private checkAuth(req: Request, res: Response) {

    }

    @Post('/logout')
    private logout(req: Request, res: Response) {

    }
}