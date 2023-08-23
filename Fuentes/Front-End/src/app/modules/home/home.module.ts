import { NgModule } from "@angular/core";
import { PageHomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutes } from "./home.router";
import { HomeService } from "@services/home-services";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const components = [
  PageHomeComponent
];

const imports = [
  CommonModule,
  HomeRoutes,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
];

const providers = [HomeService];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: providers,
})
export class HomeModule { }
