import { Role } from "./role";
import { User } from "./user";

export class UserRole {
    id: number | undefined;
    userRoleId: number | undefined;
    user?: User;
    role?: Role;
}