import {Request, Response} from "express";
import {validate} from "class-validator";
import {AppResponse} from "../responses/app-response";

export function RequestValidator(params: object) {

    return function (
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        descriptor.value = async (req: Request, res: Response) => {
            const paramClass = mapRequest(params, req)

            const errors = await validate(paramClass);

            if (errors.length) {
                for (let errorKey in errors[0].constraints) {
                    AppResponse.error(res, errors[0].constraints[errorKey], 'Validation Exception');
                }
            }
        };

        return descriptor.value;
    };
}

//
function mapRequest(params: object, req: Request) {
    for (const key in req.body) {
        //@ts-ignore
        params[key] = req.body[key];
    }

    return params;
}