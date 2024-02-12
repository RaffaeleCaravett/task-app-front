import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class TaskModule { }
