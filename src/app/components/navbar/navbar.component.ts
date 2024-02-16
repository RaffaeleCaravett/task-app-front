import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

constructor(private router:Router,private authGuard :AuthGuard){}

isAuthenticated:boolean=false

  goToRoute(route:string){
    this.router.navigate([`/${route}`,0])
this.isAuthenticated=this.authGuard.isAuthenticated
  }
}
