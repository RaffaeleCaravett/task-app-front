import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service';
import { GiornoComponent } from '../giorno/giorno.component';

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
caselle:number=38
caselleArray:any[]=[]
nomiGiorniArray:any[]=[]
firstDaysArray:any[]=[]
  constructor(private route:ActivatedRoute,
    private toastr:ToastrService,private router:Router,private taskService:TaskService,private matDialog:MatDialog){}

      ngOnInit(): void {


        this.nomiGiorniArray=['L','Ma','Me','G','V','S','D']
for(let i = 1;i<=this.caselle;i++){
  this.caselleArray.push(i)
}
let currentYear:number = new Date().getFullYear();
for(let month=0;month<=11;month++){
  let firstDay =    new Date(currentYear,month,1).getDay()
let firstDayName=''
  switch(firstDay){
  case 0 :
    firstDay=7
firstDayName='Domenica';
  break;
  case 1:
    firstDay=1
  firstDayName='Lunedì';
    break;
    case 2:
      firstDay=2
      firstDayName='Martedì';
      break;
      case 3:
        firstDay=3
        firstDayName='Mercoledì';
        break;
        case 4:
         firstDay=4
          firstDayName='Giovedì';
          break;
          case 5:
            firstDay=5
            firstDayName='Venerdì';
            break;
            case 6:
              firstDay=6
              firstDayName='Sabato';
              break;
              default:
                firstDay=1
                firstDayName='Lunedì'
                break;
}
  this.firstDaysArray.push(
 firstDay
    )
}
console.log(this.firstDaysArray[0].firstDayNumber)
        this.route.params.subscribe(params => {
          this.taskService.getUserById(params['id']).subscribe((user:any)=>{
            this.user=user
           this.taskService.getCalendarioByUserIdAndYear(currentYear,user.id).subscribe((calendar:any)=>{
            if(calendar){
              this.calendar=calendar

            }
           },err=>{
            this.toastr.show(err.error.message)
           })
          })
        })
      }


      showDay(dayOfMonth:number,month:number,dayOfWeek:number){
console.log()

const dialogRef = this.matDialog.open(GiornoComponent,{data:{giornoDelmese:dayOfMonth,mese:month,giornoDellaSettimana:dayOfWeek}})

dialogRef.afterClosed().subscribe((result:any)=>{console.log(result)})
      }
}
