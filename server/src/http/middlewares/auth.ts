import {NextFunction, Request, Response} from "express";
import {Container} from "typescript-ioc";
import {HeadersService} from "../services/headers-service";
import {AuthService} from "../../domain/auth/services/auth-service";
import {errorHandler} from "./error-handler";

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    const headerService: HeadersService = Container.get(HeadersService)
    const authService: AuthService = Container.get(AuthService)

    try {
        const token = headerService.getAuthToken(req);

        req.user = await authService.checkUser(token);
    }
    catch (e) {
        //@ts-ignore
        return errorHandler(e, req, res, next);
    }

    next();
}