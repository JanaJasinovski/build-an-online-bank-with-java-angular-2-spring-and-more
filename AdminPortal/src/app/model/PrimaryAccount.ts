import { PrimaryTransaction } from "./primaryTransaction";

export class PrimaryAccount {
    id: number | undefined;
    accountNumber: number | undefined;
    accountBalance: number | undefined;
    primaryTransactionList?: PrimaryTransaction[];
}