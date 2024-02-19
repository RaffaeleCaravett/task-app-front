import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../core/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

private user:string='/user';
private calendario:string='/calendario';
private task:string='/task'
constructor(private http:HttpClient){}


getUserById(id:number){
  return this.http.get(environment.API_URL+this.user+`/${id}`)
}
getCalendarioByUserId(user:number){
  return this.http.get(environment.API_URL+this.calendario+`/user/${user}`)
}
getTaskByMeseYearAndUserAndGiornoDelMese(mese:number,user:number,year:string,giornoDelMese:number){
return this.http.get(environment.API_URL+this.task+`/meseAndYearAndUserAndGiornoDelMese/${mese}/${user}/${year}/${giornoDelMese}`)
}

saveTask(year:number,task:any){
  return this.http.post(environment.API_URL+this.task+`/${year}`,task)
}
getTaskById(id:number){
  return this.http.get(environment.API_URL+this.task+`/${id}`)
}
putTaskById(id:number,year:any,task:any){
  return this.http.put(environment.API_URL+this.task+`/${id}/${year}`,task)
}
deleteTaskById(id:number){
  return this.http.delete(environment.API_URL+this.task+`/${id}`)
}
getAllTasksByUserId(user_id:number){
return this.http.get(environment.API_URL+this.task+this.user+`/${user_id}`)
}
}
