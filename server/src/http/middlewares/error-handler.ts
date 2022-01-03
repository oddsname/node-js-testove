import {NextFunction, Request, Response} from "express";
import {HttpException} from "../exceptions/http-exception";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err instanceof HttpException) {
        return err.getResponse(res);
    }

    return err;
}