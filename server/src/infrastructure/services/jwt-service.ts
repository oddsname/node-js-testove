import jwt from "jsonwebtoken"

export class JwtService {
    sign(data: object, secret: string, expires: string = '6h'): string {
        return jwt.sign(data, secret, { expiresIn: expires });
    }

    verify(token: string, secret: string): object | undefined {
        let result = undefined;

        jwt.verify(token, secret, (err, data) => {
            result = data;
        });

        return result;
    }
}