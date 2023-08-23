import { NgModule } from "@angular/core";
import { PageCreateComponent } from "./create.component";
import { CommonModule, registerLocaleData } from "@angular/common";
import { CreateRoutes } from "./create.router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateService } from "@services/create-services";
import { AlertModule } from "src/app/common/alert-message/alert-message.module";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import localePy from '@angular/common/locales/es-US';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { Config } from "@config/index";

registerLocaleData(localePy, 'es');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, Config.translatesPathlibrary, '.json');
}

const components = [
  PageCreateComponent
];

const imports = [
  AlertModule,
  CommonModule,
  CreateRoutes,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  TranslateModule.forRoot({ loader: {
    deps: [HttpClient],
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory
  }})
];

const providers = [CreateService];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: providers,
})
export class CreateModule { }
