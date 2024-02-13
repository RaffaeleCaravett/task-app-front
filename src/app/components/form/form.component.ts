import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

section:string=''
login!:FormGroup
signup!:FormGroup
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
}
