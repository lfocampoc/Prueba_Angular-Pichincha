import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert-message.component";
import { CommonModule } from "@angular/common";

const declarations = [AlertComponent];

const imports = [
  CommonModule,
];

@NgModule({
  declarations: declarations,
  exports: declarations,
  imports: imports,
  // providers: [ModalService]
})

export class AlertModule {}