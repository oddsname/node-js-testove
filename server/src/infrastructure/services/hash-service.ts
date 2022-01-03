import * as argon2 from "argon2";

export class HashService {

    public hash(str: string): Promise<string>
    {
        return argon2.hash(str);
    }

    public compare(str: string, hash: string): Promise<boolean>
    {
        return argon2.verify(hash, str)
    }
}