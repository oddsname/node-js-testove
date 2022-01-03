import {User} from "../../domain/auth/entities/user";

export const UserTransformer = {
    single: function(user: User) {
        return {
            name: user.name,
            email: user.email,
        }
    },

    list: function (users: Array<User>) {
        return users.map((user: User) => this.single(user))
    }
}