import bcrypt from "bcrypt"

const HASH_ROUNDS = 10;

export class HashService {
    public hash(str: string): Promise<string>
    {
        return bcrypt.hash(str, HASH_ROUNDS);
    }
}