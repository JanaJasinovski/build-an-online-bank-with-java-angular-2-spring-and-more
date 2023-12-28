import { User } from "./user";

export class Recipient {
    id: number | undefined;
    name: string = "";
    email: string = "";
    phone: string = "";
    accountNumber: string = "";
    description: string = "";
    user?: User;
}