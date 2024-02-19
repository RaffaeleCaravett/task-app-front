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
currentYear:number=0
  constructor(private route:ActivatedRoute,
    private toastr:ToastrService,private router:Router,private taskService:TaskService,private matDialog:MatDialog){}

      ngOnInit(): void {


        this.nomiGiorniArray=['L','Ma','Me','G','V','S','D']
for(let i = 1;i<=this.caselle;i++){
  this.caselleArray.push(i)
}
this.currentYear= new Date().getFullYear();
for(let month=0;month<=11;month++){
  let firstDay =    new Date(this.currentYear,month,1).getDay()
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
        this.route.params.subscribe(params => {
          this.taskService.getUserById(params['id']).subscribe((user:any)=>{
            this.user=user
           this.taskService.getCalendarioByUserIdAndYear(this.currentYear,user.id).subscribe((calendar:any)=>{
            if(calendar){
              this.calendar=calendar
              console.log(calendar)
if(this.calendar.tipoAnno=="BISESTILE"){
  this.calendar.meseList.forEach((mese:any)=>{
    if(mese.nomeMese=='FEBBRAIO'){
      mese.giorni=29
    }
  })
}
            }
           },err=>{
            this.toastr.show(err.error.message)
           })
          })
        })
      }


      showDay(dayOfMonth:number,month:number,dayOfWeek:number){

const dialogRef = this.matDialog.open(GiornoComponent,{data:{giornoDelmese:dayOfMonth,mese:month,giornoDellaSettimana:dayOfWeek,user:this.user,year:this.currentYear}})

dialogRef.afterClosed().subscribe((result:any)=>{})
      }
}
