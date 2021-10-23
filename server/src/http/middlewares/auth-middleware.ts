import {NextFunction, Request, Response} from "express";
import {AuthorizationException} from "../exceptions/authorization-exception";
import {Container} from "typescript-ioc";
import {JwtService} from "../../services/jwt-service";
import {configs} from "../../configs/config";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('authorization');
    const jwtService: JwtService = Container.get(JwtService);

    //TODO: complete

    // if(authHeader) {
    //     const token: string|undefined = authHeader.split(' ')[1];
    //
    //     const result = jwtService.verify(token+"", configs.ACCESS_TOKEN);
    //
    //     try {
    //
    //     } catch {
    //         throw new AuthorizationException("Invalid token")
    //     }
    // } else {
    //     throw new AuthorizationException("Header 'authorization' does not exist")
    // }
}