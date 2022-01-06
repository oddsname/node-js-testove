import {Length, Validate} from "class-validator";
import {IsDateAfter} from "../validation-rules/is-date-after";
import {File} from "../../../domain/files/entities/file";
import {CheckFile} from "../validation-rules/check-file";
import {DateService} from "../../../infrastructure/services/date-service";

export class UserSaveFileParams {
    @CheckFile({
        maxSize: 10485760, // 10mb
        extensions: ['pdf', 'txt']
    }, {message: "Max file size 10mb, available formats: pdf, txt"})
    file: File

    @IsDateAfter(DateService.now())
    delete_date: string

    @Length(5, 150)
    name: string

    @Length(1, 500)
    comment: string
}