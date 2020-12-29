import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  constructor(private http:HttpClient) {

   }
   addExpert(data:any ){
    return this.http.post(environment.host+'/experts/Addexpert',data)
  }
  loginExpert(data:any ){
    return this.http.post(environment.host+'/experts/login2',data)
  }
  getAllexpert(){
    return this.http.get(environment.host+'/experts/getexpert')
  }
  getoneexpert(id:any){
return this.http.get(environment.host+'/experts/getOneexpert/'+id)
  }
}
