import {
    Length,
    IsEmail,
} from 'class-validator';

export class LoginParams {
    @IsEmail()
    public email: string;

    @Length(4)
    public password: string
}
