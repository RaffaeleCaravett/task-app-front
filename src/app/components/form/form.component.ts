import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

section:string=''
login!:FormGroup
signup!:FormGroup
submitted:boolean=false
constructor(private authService:AuthService,private toastr:ToastrService,private router:Router){}

ngOnInit(): void {
  this.section='login'
  this.login= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  this.signup=new FormGroup({
    nome: new FormControl('',[Validators.required,Validators.minLength(2)]),
    cognome: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    eta:new FormControl('',[Validators.required,Validators.min(18)]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  ripeti:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
}




logIn(){
  this.submitted=true
  if(this.login.valid){
    this.authService.logIn({
      email:this.login.controls['email'].value,
      password:this.login.controls['password'].value
    }).subscribe({
    next: (tokens:any)=>{
if(tokens){
  console.log(tokens.tokens)
  this.authService.token=tokens.tokens.accessToken
  this.authService.refreshToken=tokens.tokens.refreshToken
  this.authService.authenticateUser(true)
  localStorage.setItem('accessToken',this.authService.token)
  localStorage.setItem('refreshToken',this.authService.refreshToken)
  this.authService.verifyToken(this.authService.token).subscribe((data:any)=>{
    if(data){
      localStorage.setItem('user',JSON.stringify(data))
      this.router.navigate(['/task',0])
    }
  })
}
    },
    error: (err:any)=>{
      this.toastr.show(err.error.message)
    },
    complete: () => { }
  })
  }
}

signUp(){
  this.submitted=true
  if(this.signup.valid&&this.signup.controls['password'].value==this.signup.controls['ripeti'].value){
    this.authService.signUp(
      {
eta:this.signup.controls['eta'].value,
email:this.signup.controls['email'].value,
password:this.signup.controls['password'].value,
nome:this.signup.controls['nome'].value,
cognome:this.signup.controls['cognome'].value
      }
    ).subscribe({
      next: (user:any)=>{
        if(user){
          this.section='login'
        }
      },
      error: (err:any)=>{
        this.toastr.show(err.error.message)
      },
      complete: () => { }
    })
  }else if(this.signup.controls['password'].value!=this.signup.controls['ripeti'].value){
    this.toastr.show("Le password non coincidono")
  }else{
    this.toastr.show("Assicurati di inserire tutti i dati e di inserirli correttamente")
  }
}

}
