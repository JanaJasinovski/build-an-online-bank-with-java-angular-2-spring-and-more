import { SavingsTransaction } from "./savingsTransaction";

export class SavingsAccount {
    id: number | undefined;
    accountNumber: number | undefined;
    accountBalance: number | undefined;
    savingsTransactionList?: SavingsTransaction[]
}