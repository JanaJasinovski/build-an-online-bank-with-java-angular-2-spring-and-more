import { PrimaryAccount } from "./PrimaryAccount";
import { SavingsAccount } from "./SavingsAccount";
import { UserRole } from "./UserRole";
import { Appointment } from "./appointment";
import { Recipient } from "./recipient";

export class User {
  userId: number | undefined;
  username: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phone: string = "";
  enabled: boolean = true;
  primaryAccount!: PrimaryAccount
  savingsAccount!: SavingsAccount
  appointmentList?: Appointment[]
  recipientList?: Recipient[]
  userRoles?: UserRole[];
}