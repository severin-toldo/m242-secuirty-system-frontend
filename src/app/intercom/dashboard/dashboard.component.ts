import { Component, OnInit } from '@angular/core';
import {SecuritySystemService} from "../../service/security-system.service";
import {Observable} from "rxjs";
import {SecuritySystem} from "../../model/security-system.model";
import { SecuritySystemHistoryType } from 'src/app/model/security-system-history-type.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public securitySystems$: Observable<SecuritySystem[]>;

  public readonly SecuritySystemHistoryType = SecuritySystemHistoryType;


  constructor(private securitySystemService: SecuritySystemService) {
  }

  public ngOnInit(): void {
    this.securitySystems$ = this.securitySystemService.getAll();
  }

  public openSecuritySystem(): void {
  }

  public deleteSecuritySystem(): void {
  }

}
