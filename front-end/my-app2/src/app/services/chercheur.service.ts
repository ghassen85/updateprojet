import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChercheurService {


    token:any=localStorage.getItem('token')
    headers=new HttpHeaders({
     'x-access-token': this.token
    })

  constructor(private http:HttpClient) { }
  addchercheur(data:any){
    return this.http.post(environment.host+'/chercheurs/Addchercheur',data)
  }
  logoutchercheur(data:any){
    return this.http.post(environment.host+'/chercheurs/logout',data,{headers:this.headers})
  }
  getAllchercheur(){
    return this.http.get(environment.host+'/chercheurs/getAllchercheur',{headers:this.headers})

  }
  loginchercheur(data:any){
    return this.http.post(environment.host+'/chercheurs/loginchercheur',data)
  }
}
