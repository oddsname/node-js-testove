import {Inject} from "typescript-ioc";
import {UserRepository} from "../repositories/user-repository";
import {AuthenticationException} from "../../../http/exceptions/authentication-exception";
import {HashService} from "../../../infrastructure/services/hash-service";
import {JwtService} from "../../../infrastructure/services/jwt-service";
import {UserJwtPayload, UserPayload} from "../value-objects/user-jwt-payload";
import {AuthorizationException} from "../../../http/exceptions/authorization-exception";
import {User} from "../entities/user";

//TODO: replace to .env
const signature = 'test';
const expires = '24h';

export class AuthService {

    constructor(
        @Inject private userRepository: UserRepository,
        @Inject private hashService: HashService,
        @Inject private jwtService: JwtService,
    ) {
    }


    public async loginUser(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AuthenticationException('Credentials are invalid');
        }

        if (!await this.hashService.compare(password, user.password)) {
            throw new AuthenticationException('Credentials are invalid');
        }

        const userPayload = new UserJwtPayload(user)

        const token = this.jwtService.sign(
            userPayload.getPayload(),
            signature,
            expires
        )

        return {token, user};
    }

    public async checkUser(token: string): Promise<User> {
        const decodedToken = this.jwtService.verify(token, signature);

        if (!decodedToken) {
            throw new AuthorizationException("Invalid Token")
        }

        const userEmail = (decodedToken as UserPayload).email;

        const user = await this.userRepository.findByEmail(userEmail)

        if(!user) {
            throw new AuthorizationException("Invalid Token")
        }

        return user;
    }
}