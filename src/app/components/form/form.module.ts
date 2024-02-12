import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { FormRoutingModule } from "./form-routing.module";
import { FormComponent } from "./form.component";

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FormModule { }
