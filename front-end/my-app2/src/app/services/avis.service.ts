import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private http:HttpClient) { }
  getavis(){
    return this.http.get(environment.host+'/aviss/getAllavis')

  }
  addavis(data:any){
    return this.http.post(environment.host+'/aviss/Addavis',data)
  }
  getoneavis(id:any){
    return this.http.get(environment.host+'/aviss/getOneavispapier/'+id)

  }
}
