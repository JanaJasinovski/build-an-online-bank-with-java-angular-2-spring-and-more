import { PrimaryAccount } from "./PrimaryAccount";

export class PrimaryTransaction {
    id: number | undefined;
    date?: Date;
    description: string = ""; 
    type: string = "";
    status: string = "";
    amount: number | undefined;
    availableBalance: number | undefined;
    primaryAccount?: PrimaryAccount;
}