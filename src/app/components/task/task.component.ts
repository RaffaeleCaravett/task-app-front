import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

user:any
calendar:any
mesi:any
giorni:any
caselle:number=40
caselleArray:any[]=[]
nomiGiorniArray:any[]=[]
firstDaysArray:any[]=[]
  constructor(private route:ActivatedRoute,
    private toastr:ToastrService,private router:Router,private taskService:TaskService){}

      ngOnInit(): void {


        this.nomiGiorniArray=['L','Ma','Me','G','V','S','D']
for(let i = 1;i<=this.caselle;i++){
  this.caselleArray.push(i)
}
let currentYear:number = new Date().getFullYear();

        this.route.params.subscribe(params => {
          this.taskService.getUserById(params['id']).subscribe((user:any)=>{
            this.user=user
           this.taskService.getCalendarioByUserIdAndYear(currentYear,user.id).subscribe((calendar:any)=>{
            if(calendar){
              this.calendar=calendar
//               for(let month=0;month-=12;month++){
//   // this.firstDaysArray.push(new Date(currentYear,month,1).getDay())
//   // console.log(new Date(currentYear,month,1).getDay())
// }
            }
           },err=>{
            this.toastr.show(err.error.message)
           })
          })
        })
      }
}
