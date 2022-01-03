import {Request, Response} from "express";
import {validate, ValidationError} from "class-validator";
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

            const errorMessage = getFirstError(errors)

            if(errorMessage) {
                AppResponse.error(res, errorMessage, 'ValidationException', 422)
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

function getFirstError(errors: ValidationError[]): string|null {

    if (errors.length) {
        for (let errorKey in errors[0].constraints) {
            return errors[0].constraints[errorKey]
        }
    }

    return null;
}