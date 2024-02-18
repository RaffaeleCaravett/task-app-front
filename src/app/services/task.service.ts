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
private task:string='/task'
constructor(private http:HttpClient, private authGuard:AuthGuard){}


getUserById(id:number){
  return this.http.get(environment.API_URL+this.user+`/${id}`)
}
getCalendarioByUserIdAndYear(anno:number,user:number){
  return this.http.get(environment.API_URL+this.calendario+`/annoUser/${anno}/${user}`)
}
getTaskByMeseYearAndUser(mese:number,year:string,user:number){
return this.http.get(environment.API_URL+this.task+`/meseAndYearAndUser/${user}/${mese}/${user}`)
}

saveTask(task:any){
  return this.http.post(environment.API_URL+this.task,task)
}
getTaskById(id:number){
  return this.http.get(environment.API_URL+this.task+`/${id}`)
}
putTaskById(id:number,task:any){
  return this.http.put(environment.API_URL+this.task+`/${id}`,task)
}
deleteTaskById(id:number){
  return this.http.delete(environment.API_URL+this.task+`/${id}`)
}

}
