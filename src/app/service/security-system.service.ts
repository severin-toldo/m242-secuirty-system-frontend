import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  deleteSecuritySystemByIdUrl,
  finishPairingUrl,
  getAllSecuritySystemsUrl,
  getSecuritySystemByIdUrl,
  getSecuritySystemHistoryUrl
} from '../shared/urls';
import {SecuritySystem} from "../model/security-system.model";
import {SecuritySystemFinishPairRequest} from "../model/api/security-system-finish-pair-request.model";


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

  public getHistory(securitySystemId: number): Observable<SecuritySystem[]> {
    return this.http.get<SecuritySystem[]>(getSecuritySystemHistoryUrl(securitySystemId));
  }

  public finishPairing(request: SecuritySystemFinishPairRequest): Observable<any> {
    return this.http.post(finishPairingUrl(), request, {observe: 'response'});
  }
}
