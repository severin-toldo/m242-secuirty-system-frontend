import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {HttpRequestInterceptor} from "./service/interceptors/http-interceptor.service";
import {ErrorMessageInterceptor} from "./service/interceptors/error-message.interceptor";
import {TokenExpiredInterceptor} from "./service/interceptors/token-expired.interceptor";
import {DatePipe} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { DashboardComponent } from './intercom/dashboard/dashboard.component';
import {NavComponent} from "./layout/nav/nav.component";
import {FeatherModule} from "angular-feather";
import {Delete, LogOut, Video} from "angular-feather/icons";
import { SecuritySystemComponent } from './intercom/security-system/security-system.component';
import { PairingComponent } from './intercom/pairing/pairing.component';


export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const icons = {
  Video,
  LogOut,
  Delete
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    SecuritySystemComponent,
    PairingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FeatherModule.pick(icons)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorMessageInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenExpiredInterceptor,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
