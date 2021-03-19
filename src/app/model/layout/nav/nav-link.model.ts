export class NavLink {
  public route: string[];
  public text: string;
  public subs: NavLink[];

  constructor(text: string, route?: string[], subs?: NavLink[]) {
    this.text = text;
    this.route = route;
    this.subs = subs;
  }

  public addSub(sub: NavLink): NavLink {
    this.subs = this.subs ? this.subs : [];
    this.subs.push(sub);
    return this;
  }
}
