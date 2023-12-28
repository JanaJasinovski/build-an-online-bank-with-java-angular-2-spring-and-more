import { UserRole } from "./UserRole";

export class Role {
    roleId: number | undefined;
    name: string = "";
    userRoles?: UserRole[];
}