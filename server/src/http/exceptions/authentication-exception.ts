import {HttpException} from "./http-exception";
import {AppResponse} from "../responses/app-response";
import {Response} from "express";

export class AuthenticationException extends HttpException {
    private statusCode: number = 401

    constructor(message: string) {
        super(message);
        this.name = 'Authorization Exception'
    }

    getResponse(res: Response): Response<JSON> {
        return AppResponse.error(res, this.message, this.name, this.statusCode);
    }
}