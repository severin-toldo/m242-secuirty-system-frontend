import {SecuritySystemHistoryType} from "./security-system-history-type.enum";

export class SecuritySystem {
  public id: number;
  public name: string;
  public status: SecuritySystemHistoryType;
}
