
import {Response} from "express";
export abstract class HttpException extends Error {
    abstract getResponse(res: Response): void
}