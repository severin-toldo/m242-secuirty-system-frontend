import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {SecuritySystemService} from "../../service/security-system.service";
import {Observable, of} from "rxjs";
import {SecuritySystem} from "../../model/security-system.model";
import {catchError, publishReplay, refCount, switchMap, switchMapTo} from "rxjs/operators";
import {ToasterService} from "../../service/toaster.service";
import { SecuritySystemHistoryType } from 'src/app/model/security-system-history-type.enum';
import {SecuritySystemHistory} from "../../model/security-system-history.model";

@Component({
  selector: 'app-security-system',
  templateUrl: './security-system.component.html',
  styleUrls: ['./security-system.component.scss']
})
export class SecuritySystemComponent implements OnInit {

  public securitySystem$: Observable<SecuritySystem>;
  public history$: Observable<SecuritySystemHistory[]>;

  public readonly SecuritySystemHistoryType = SecuritySystemHistoryType;


  constructor(private activatedRoute: ActivatedRoute,
              private securitySystemService: SecuritySystemService,
              private toaster: ToasterService) {
  }

  public ngOnInit(): void {
    this.securitySystem$ = this.activatedRoute.params
      .pipe(switchMap(params => this.securitySystemService.getById(params.id)))
      .pipe(catchError(error => {
        this.toaster.error(error.errorMessage);
        return of(null);
      }))
      .pipe(publishReplay())
      .pipe(refCount());

    this.history$ = this.securitySystem$
      .pipe(switchMap(ss => this.securitySystemService.getHistory(ss.id)))
      .pipe(publishReplay())
      .pipe(refCount());
  }

}
