import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app-routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SessionService } from '@services/session-service';
import { CommonModule } from '@angular/common';
import { ServiceUtils } from '@services/services-utils';
import { MainHttpInterceptor } from '@interceptors/main-http-interceptor';

const declarations = [AppComponent];

const imports = [
  AppRoutes,
  BrowserModule,
  CommonModule,
  HttpClientModule
];

const providers = [
  {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: MainHttpInterceptor
  },
  SessionService,
  ServiceUtils
];

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
