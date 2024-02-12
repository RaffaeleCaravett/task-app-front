import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { ProfiloComponent } from "./profilo.component";
import { ProfiloRoutingModule } from "./profilo-routing.module";

@NgModule({
  declarations: [
    ProfiloComponent
  ],
  imports: [
    CommonModule,
    ProfiloRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ProfiloModule { }
