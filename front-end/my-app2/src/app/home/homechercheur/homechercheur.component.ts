import { ChercheurService } from './../../services/chercheur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homechercheur',
  templateUrl: './homechercheur.component.html',
  styleUrls: ['./homechercheur.component.css']
})
export class HomechercheurComponent implements OnInit {
//id:any;
user:any;
userjson:any;
  constructor(private route:ActivatedRoute, private router: Router, private chercheurservice:ChercheurService ) {
    //this.id=this.route.snapshot.params.id

   }

  ngOnInit(): void {
    this.user=localStorage.getItem('userconnect');

    this.userjson=JSON.parse(this.user)['chercheur']

    console.log(this.user)
    console.log(this.userjson)

   // console.log(this.id)
  }
goToregisterpapier(){
  this.router.navigate(['/home/registerpapier']);
}
goToallavis(){
  this.router.navigate(['/home/allavis'])
}
goTovospapier(){
  this.router.navigate(['/home/vospapier'])
}
remove(){
 // this.user=localStorage.removeItem('userconnect');

  //this.router.navigate(['/login'])
  this.chercheurservice.logoutchercheur(localStorage.getItem('refreshtoken')).subscribe(res=>{
    this.user=localStorage.removeItem('userconnect');
    this.user=localStorage.removeItem('refreshtoken');
    this.user=localStorage.removeItem('token');
    this.router.navigate(['/login'])

  })
}
}
