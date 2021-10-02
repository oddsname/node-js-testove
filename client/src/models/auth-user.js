export class AuthUser {

    constructor(data) {
        this.fillData(data);
    }

    fillData(data) {
        this.name = data.name;
    }
}