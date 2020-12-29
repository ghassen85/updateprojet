import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PapierService {
  token:any=localStorage.getItem('token')
  headers=new HttpHeaders({
   'x-access-token': this.token
  })
  constructor(private http: HttpClient) { }
  getpapier(){
    return this.http.get(environment.host+'/papiers/getAllpapier')

  }
  addpapier(data:any){
    return this.http.post(environment.host+'/papiers/Addpapier',data)
  }
  getone(id:any){
    return this.http.get(environment.host+'/papiers/getOnepapier/'+id)
  }
  getonechercheur(id:any){
    return this.http.get(environment.host+'/papiers/getOnechecheur/'+id)
  }
  getonedomaine(id:any){
    return this.http.get(environment.host+'/papiers/getOnedomaine/'+id)
  }
}

