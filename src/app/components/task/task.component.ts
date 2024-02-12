import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  constructor(private route:ActivatedRoute,
    private toastr:ToastrService,private router:Router){}

      ngOnInit(): void {

        if(localStorage.getItem('user')){

        }
        this.route.params.subscribe(params => {
          console.log(params['id'])
        })
      }
}
