import {Request, Response} from "express";
import {HttpException} from "../exceptions/http-exception";

export function errorHandler(error: Error, req: Request, res: Response) {
    if(error instanceof HttpException) {
        return error.getResponse(res);
    }
}