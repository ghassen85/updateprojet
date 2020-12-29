import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationediGuard implements CanActivate {
  constructor(private router: Router ){}

  canActivate(activatedroute: ActivatedRouteSnapshot, routerstate: RouterStateSnapshot) {


    if(localStorage.getItem('userconnect2')=== null){
      this.router.navigate(['/loginediteur']);
      return false;
    }
    return true ;
  }
}
