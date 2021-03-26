import {SecuritySystem} from "./security-system.model";
import {User} from "./user.model";
import {SecuritySystemHistoryType} from "./security-system-history-type.enum";

export class SecuritySystemHistory {
  public id: number;
  public datetime: Date;
  public type: SecuritySystemHistoryType;
  public user: User;
  public securitySystem: SecuritySystem;
}
