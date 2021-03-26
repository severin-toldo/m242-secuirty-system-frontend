import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToasterService} from "../../service/toaster.service";
import {dashboardRoute} from "../../shared/routes";
import {SecuritySystemService} from "../../service/security-system.service";
import {SecuritySystemFinishPairRequest} from "../../model/api/security-system-finish-pair-request.model";

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.scss']
})
export class PairingComponent implements OnInit {

  public form: FormGroup;


  constructor(private router: Router,
              private fb: FormBuilder,
              private toaster: ToasterService,
              private securitySystemService: SecuritySystemService) {
  }

  public ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', Validators.required]
    });
  }

  public finishPairing(): void {
    const request = new SecuritySystemFinishPairRequest();
    request.name = this.form.get('name').value;
    request.pairingCode = this.form.get('code').value;

    this.securitySystemService.finishPairing(request)
      .subscribe(() => {
        this.router.navigate(dashboardRoute());
      }, error => {
        this.toaster.error(error.errorMessage);
      });
  }

}
