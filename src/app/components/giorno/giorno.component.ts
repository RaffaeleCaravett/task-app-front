import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-giorno',
  templateUrl: './giorno.component.html',
  styleUrls: ['./giorno.component.scss']
})
export class GiornoComponent implements OnInit{
  giornoDelMese:any
  mese:any
  giornoDellaSettimana:any
  giornoDellaSettimanaNome:any
user:any
currentYear!:number
tasks:any[]=[]
canAdd:boolean=false
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<GiornoComponent>,private toastr:ToastrService,
  private taskService:TaskService) { }


  ngOnInit(): void {
    let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    let openedDate = new Date(this.data.year, this.data.mese.id-1, this.data.giornoDelmese);
   if(today<=openedDate){
    this.canAdd=true
   }

this.giornoDelMese=this.data.giornoDelmese
this.mese=this.data.mese
this.giornoDellaSettimana=this.data.giornoDellaSettimana
this.user=this.data.user
this.currentYear=this.data.year
if(this.giornoDellaSettimana==0||this.giornoDellaSettimana==7||this.giornoDellaSettimana==14||this.giornoDellaSettimana==21||this.giornoDellaSettimana==28
  ||this.giornoDellaSettimana==35){
  this.giornoDellaSettimanaNome='Lunedì';
}else if(this.giornoDellaSettimana==1||this.giornoDellaSettimana==8||this.giornoDellaSettimana==15||this.giornoDellaSettimana==22||this.giornoDellaSettimana==29
  ||this.giornoDellaSettimana==36){
      this.giornoDellaSettimanaNome='Martedì';
    }else if(this.giornoDellaSettimana==2||this.giornoDellaSettimana==9||this.giornoDellaSettimana==16||this.giornoDellaSettimana==23||this.giornoDellaSettimana==30
      ||this.giornoDellaSettimana==37){
        this.giornoDellaSettimanaNome='Mercoledì';
     }else if(this.giornoDellaSettimana==3||this.giornoDellaSettimana==10||this.giornoDellaSettimana==17||this.giornoDellaSettimana==24||this.giornoDellaSettimana==31
      ||this.giornoDellaSettimana==38){
          this.giornoDellaSettimanaNome='Giovedì';
      }else if(this.giornoDellaSettimana==4||this.giornoDellaSettimana==11||this.giornoDellaSettimana==18||this.giornoDellaSettimana==25||this.giornoDellaSettimana==32
        ||this.giornoDellaSettimana==39){
            this.giornoDellaSettimanaNome='Venerdì';
      }else if(this.giornoDellaSettimana==5||this.giornoDellaSettimana==12||this.giornoDellaSettimana==19||this.giornoDellaSettimana==26||this.giornoDellaSettimana==33
        ||this.giornoDellaSettimana==40){
              this.giornoDellaSettimanaNome='Sabato';
      }else if(this.giornoDellaSettimana==6||this.giornoDellaSettimana==13||this.giornoDellaSettimana==20||this.giornoDellaSettimana==27||this.giornoDellaSettimana==34
        ||this.giornoDellaSettimana==41){
                this.giornoDellaSettimanaNome='Domenica';
      }else{
                this.giornoDellaSettimanaNome='Lunedì'
      }

      this.taskService.getTaskByMeseYearAndUser(this.mese.id,this.user.id,this.currentYear).subscribe({
      next: (tasks:any)=>{
    this.tasks=tasks
      },
      error: (err:any)=>{
        this.toastr.show(err.error.message)
      },
      complete: () => { }
    }


      );

}
addTask(){
if(this.canAdd){

}
}
}
