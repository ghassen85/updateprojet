import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http:HttpClient) { }
  getAlldomaine(){
    return this.http.get(environment.host+'/domaines/getAll')
  }
}
