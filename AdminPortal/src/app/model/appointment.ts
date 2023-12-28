import { User } from "./user";

export class Appointment {
    id!: number;
    date!: Date;
    location: string = "";
    description: string = "";
    confirmed: boolean = true;
    user?: User;
}