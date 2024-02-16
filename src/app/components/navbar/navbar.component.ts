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

constructor(private router:Router,private authGuard :AuthGuard,private authService:AuthService){
this.authService.subj.subscribe((bool:any)=>{
  this.isAuthenticated=bool
})

}

isAuthenticated:boolean=false

  goToRoute(route:string){
    this.router.navigate([`/${route}`,0])
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
