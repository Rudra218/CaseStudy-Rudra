export class User {
    id?: number;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;   // or lastName: string | undefined;
    authdata?: string;
}