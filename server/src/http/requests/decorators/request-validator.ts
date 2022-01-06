import {NextFunction, Request, Response} from "express";
import {validate, ValidationError} from "class-validator";
import {AppResponse} from "../../responses/app-response";

export function RequestValidator(params: object) {

    return function (
        target: Object,
        key: string | symbol,
        descriptor: PropertyDescriptor
    ) {
       const originalMethod = descriptor.value;

        descriptor.value = async (...args: any[]) => {
            const req: Request = args[0];
            const res: Response = args[1];

            const paramClass = mapRequest(params, req)

            const errors = await validate(paramClass);

            const errorMessage = getFirstError(errors)

            if(errorMessage) {
                return AppResponse.error(res, errorMessage, 'ValidationException', 422);
            }

            return originalMethod.apply(target, args);
        };

        return descriptor;
    };
}

//
function mapRequest(params: object, req: Request) {
    for (const key in req.body) {
        //@ts-ignore
        params[key] = req.body[key];
    }

    for (const key in req.files) {
        //@ts-ignore
        params[key] = req.files[key];
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