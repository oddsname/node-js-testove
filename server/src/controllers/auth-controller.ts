import {Request, Response} from "express";


export const authController = {

    login: function (req: Request, res: Response) {
        return res.end('Test');
    },

}