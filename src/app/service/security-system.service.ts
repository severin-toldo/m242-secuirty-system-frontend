import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  changeSecuritySystemStatusUrl,
  deleteSecuritySystemByIdUrl,
  finishPairingUrl,
  getAllSecuritySystemsUrl,
  getSecuritySystemByIdUrl,
  getSecuritySystemHistoryUrl
} from '../shared/urls';
import {SecuritySystem} from "../model/security-system.model";
import {SecuritySystemFinishPairRequest} from "../model/api/security-system-finish-pair-request.model";
import {SecuritySystemHistory} from "../model/security-system-history.model";
import {SecuritySystemHistoryType} from "../model/security-system-history-type.enum";


@Injectable({
  providedIn: 'root'
})
export class SecuritySystemService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<SecuritySystem[]> {
    return this.http.get<SecuritySystem[]>(getAllSecuritySystemsUrl());
  }

  public getById(id: number): Observable<SecuritySystem> {
    return this.http.get<SecuritySystem>(getSecuritySystemByIdUrl(id));
  }

  public deleteById(id: number): Observable<any> {
    return this.http.delete(deleteSecuritySystemByIdUrl(id), {observe: 'response'});
  }

  public getHistory(securitySystemId: number): Observable<SecuritySystemHistory[]> {
    return this.http.get<SecuritySystemHistory[]>(getSecuritySystemHistoryUrl(securitySystemId));
  }

  public finishPairing(request: SecuritySystemFinishPairRequest): Observable<any> {
    return this.http.post(finishPairingUrl(), request, {observe: 'response'});
  }

  public changeStatus(securitySystemId: number, status: SecuritySystemHistoryType): Observable<any> {
    return this.http.post(changeSecuritySystemStatusUrl(securitySystemId), {status}, {observe: 'response'});
  }
}
