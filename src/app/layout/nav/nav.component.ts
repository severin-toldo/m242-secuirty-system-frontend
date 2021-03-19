import { Component, OnInit } from '@angular/core';
import {NavService} from '../../service/nav.service';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {getCurrentRoute} from '../../shared/util/other.util';
import {dashboardRoute, loginRoute} from '../../shared/routes';
import {NavLink} from "../../model/layout/nav/nav-link.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isLoggedIn = false;
  public navLinks: NavLink[] = [];

  public readonly dashboardRoute = dashboardRoute;

  constructor(private authService: AuthService,
              private navService: NavService) {
  }

  public ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.navLinks = this.navService.getTopNav();
  }

  public isNavLinkActive(navLink: NavLink): boolean {
    return navLink.route[0] === getCurrentRoute();
  }

  public logout(): void {
    this.authService.logout();
  }
}
