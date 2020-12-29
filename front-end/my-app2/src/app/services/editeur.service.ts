import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditeurService {

  constructor(private http:HttpClient) { }
  addEditeur(data:any){
    return this.http.post(environment.host+'/editeurs/Addediteur',data)
  }
  getAllEditeur(){
    return this.http.get(environment.host+'/editeurs/getediteur')
  }
  loginchercheur(data:any){
    return this.http.post(environment.host+'/editeurs/login',data)
  }

}
