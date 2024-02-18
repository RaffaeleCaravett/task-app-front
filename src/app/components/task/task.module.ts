import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class TaskModule { }
