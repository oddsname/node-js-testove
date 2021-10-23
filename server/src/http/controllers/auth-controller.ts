import {Request, Response} from "express";
import {AppResponse} from "../responses/app-response";
import {Controller, Post} from "@overnightjs/core";
import {Inject} from "typescript-ioc";
import {JwtService} from "../../services/jwt-service";


@Controller('api/auth')
export class AuthController {
    @Inject
    private jwtService: JwtService;

    @Post('login')
    public async login (req: Request, res: Response): Promise<Response> {
        return AppResponse.success(res, {})
    }

    @Post('/check-auth')
    private checkAuth(req: Request, res: Response) {

    }

    @Post('/logout')
    private logout(req: Request, res: Response) {

    }
}