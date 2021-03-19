import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {NavLink} from "../model/layout/nav/nav-link.model";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(private authService: AuthService) {
  }

  public getTopNav(): NavLink[] {
    const navLinks = [
      // new NavLink('TRANS_STRING', ROUTE()),
    ];

    return navLinks;
  }
}
