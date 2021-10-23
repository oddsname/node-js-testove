import jwt from "jsonwebtoken"

export class JwtService {
    sign(data: object, secret: string): string {
        return jwt.sign(data, secret);
    }

    verify(token: string, secret: string): object | null {
        let result = null;

        jwt.verify(token, secret, (err, data) => {
            result = data || null;
        });

        return result;
    }
}