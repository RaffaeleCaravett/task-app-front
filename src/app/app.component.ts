import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'task';

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    Aos.init()

    if(localStorage.getItem('accessToken')){
      this.authService.verifyToken(localStorage.getItem('accessToken')!).subscribe((user:any)=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user))
          this.authService.setUser(localStorage.getItem('user')!)
          this.authService.authenticateUser(true)
          this.authService.token=localStorage.getItem('accessToken')!
          if(localStorage.getItem('refreshToken')){
            this.authService.refreshToken=localStorage.getItem('refreshToken')!
          }
          this.router.navigate(['/task',user.id])
        }
      },err=>{
        this.authService.verifyRefreshToken(localStorage.getItem('refreshToken')!).subscribe((tokens:any)=>{
          if(tokens){
            this.authService.verifyToken(tokens.accessToken).subscribe((user:any)=>{
              if(user){
                localStorage.setItem('user',JSON.stringify(user))
                this.authService.setUser(localStorage.getItem('user')!)
                this.authService.authenticateUser(true)
                this.authService.token=tokens.accessToken
                this.router.navigate(['/task',user.id])
              }
            },err=>{
              this.authService.authenticateUser(false)
              this.router.navigate(['/form'])
            })
          }
        })
      })
    }
  }


}
