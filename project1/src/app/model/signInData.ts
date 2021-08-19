export class SignInData {
    private login: string = "employee";
    private password: string = "employee";

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }

    getLogin(): string {
        return this.login;
    }

    getPassword(): string {
        return this.password;
    }
}