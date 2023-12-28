import { SavingsAccount } from "./SavingsAccount";

export class SavingsTransaction {
    id: number | undefined;
    date?: Date;
    description: string = ""; 
    type: string = "";
    status: string = "";
    amount: number | undefined;
    availableBalance: number | undefined;
    savingsAccount?: SavingsAccount;
}