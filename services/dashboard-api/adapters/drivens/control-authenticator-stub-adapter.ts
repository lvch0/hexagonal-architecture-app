import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
    token: "123123asdasd123",
    refreshToken: "123123asdasd123"
}

const permissionsMock: Permissions = {
    admin: true,
    user: true
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock);
    }
}