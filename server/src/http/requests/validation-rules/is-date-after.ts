import {
    ValidationArguments,
    ValidationOptions, registerDecorator
} from "class-validator";
import {DateService} from "../../../infrastructure/services/date-service";
import {DateTime} from "luxon";

export function IsDateAfter(compareDate: DateTime, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsDateAfter',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [propertyName],
            options: {...validationOptions, message: validationOptions?.message || "Invalid date"},
            validator: {
                validate(value: string, args: ValidationArguments) {
                    try {
                        return DateService.isValidDate(value) && DateService.isDateAfter(
                            DateService.parse(value),
                            compareDate,
                        );
                    }
                    catch (e) {
                        console.log(e);
                        return  false;
                    }
                },
            },
        });
    };
}