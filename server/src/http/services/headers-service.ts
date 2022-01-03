import {Request} from "express";

export class HeadersService {

    getAuthToken(req: Request): string {
        const bearer = req.headers['authorization'] || '';

        return bearer.split(' ')[1] || '';
    }

}