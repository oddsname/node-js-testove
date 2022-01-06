import {
    ValidationArguments,
    ValidationOptions, registerDecorator
} from "class-validator";
import {FileService} from "../../../domain/files/services/file-service";

const defaultErrorMessage = "Invalid file uploaded"

export interface checkFileOptions {
    maxSize: number,
    extensions: Array<string>
}

export function CheckFile(options: checkFileOptions, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'CheckFile',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [propertyName],
            options: {...validationOptions, message: validationOptions?.message || defaultErrorMessage},
            validator: {
                validate(value: File, args: ValidationArguments) {
                    try {
                        const extension = FileService.getExtension(value.name);

                        return value.size < options.maxSize
                            && options.extensions.includes(extension) ;
                    } catch (e) {
                        return false;
                    }
                },
            },
        });
    };
}