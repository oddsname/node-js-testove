import { DateTime } from "luxon"

export const DATE_FORMAT = 'dd.LL.yy';

export class DateService {
    static isValidDate(str: string): boolean {
        return DateTime.fromFormat(str || '', DATE_FORMAT).isValid;
    }

    static parse(str: string): DateTime {
        return DateTime.fromFormat(str || '', DATE_FORMAT);
    }

    static parseJsDate(date: Date): DateTime {
        return DateTime.fromJSDate(date)
    }

    static now(): DateTime {
        return DateTime.now();
    }

    static isDateAfter(date1: DateTime, date2: DateTime): boolean {
        return date1 >= date2;
    }
}