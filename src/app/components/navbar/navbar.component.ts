import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
user:any
constructor(private router:Router,private authGuard :AuthGuard,private authService:AuthService){
this.authService.subj.subscribe((bool:any)=>{
  this.isAuthenticated=bool
})
this.authService.user.subscribe((user:any)=>{
  this.user=user
})
}

isAuthenticated:boolean=false

  goToRoute(route:string){
    this.router.navigate([`/${route}`,this.user.id])
this.isAuthenticated=this.authGuard.isAuthenticated
  }
  logout(){
    localStorage.clear()
    this.authService.authenticateUser(false)
    this.authService.setToken('')
    this.authService.setRefreshToken('')
    this.router.navigate(['/home'])
  }
}
