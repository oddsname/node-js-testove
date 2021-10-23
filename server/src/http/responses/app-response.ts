import {Response} from "express";

export class AppResponse {
    static success(res: Response, data: object = {}): Response<JSON> {
        return res.json({
            success: true,
            data,
        })
    }

    static error(
        res: Response,
        message: string,
        exception: string,
        statusCode: number = 400,
        info: object = {}
    ): Response<JSON> {
        return res.status(statusCode).json({
            success: false,
            message,
            exception,
            info,
        })
    }
}