import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { AuthGuard } from "../core/auth.guard"
import { environment } from "../core/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

private user:string='/user';
private calendario:string='/calendario';

constructor(private http:HttpClient, private authGuard:AuthGuard){}


getUserById(id:number){
  return this.http.get(environment.API_URL+this.user+`/${id}`)
}
getCalendarioByUserIdAndYear(anno:number,user:number){
  return this.http.get(environment.API_URL+this.calendario+`/annoUser/${anno}/${user}`)
}
}
