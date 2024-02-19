import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfiloService } from 'src/app/services/profilo.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent {

  user:any
  calendario:any[]=[]
  tasks:any[]=[]
  constructor(private route:ActivatedRoute,
    private toastr:ToastrService,private router:Router,private profiloService:ProfiloService){}

      ngOnInit(): void {
        this.route.params.subscribe(params => {

this.profiloService.getUserById(params['id']).subscribe((user:any)=>{
  this.user=user
this.profiloService.getCalendarioByUserId(this.user.id).subscribe((calendario:any)=>{
if(calendario){
  this.calendario=calendario
  for(let c of calendario){
    for(let mese of c.meseList){

    this.profiloService.getAllTasksByUserId(this.user.id).subscribe((tasks:any)=>{
      if(tasks){
        this.tasks=tasks
      }
    })
  }
  }

}
})
})
        })
      }
}
