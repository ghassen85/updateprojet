import { ExpertService } from './../../services/expert.service';
import { PapierService } from './../../services/papier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allpapier',
  templateUrl: './allpapier.component.html',
  styleUrls: ['./allpapier.component.css']
})
export class AllpapierComponent implements OnInit {
allpapier:any;
user:any;
userjson:any;
a:any={};
b:any;
  constructor(private papierservice:PapierService,private expertservice:ExpertService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('userconnect1');

    this.userjson=JSON.parse(this.user)['expert']
    console.log(this.userjson.domaine)

   // this.papierservice.getonechercheur(this.userjson.domaine).subscribe(res3=>{
    //  console.log(res3)
   // })

   this.getonepapiers()



    }
   /*  getAllcpapiers(){
      this.papierservice.getpapier().subscribe( (res3:any) =>{
        this.allpapier=res3.data
        console.log(this.allpapier)

      })
    } */
    getonepapiers(){
      this.papierservice.getonedomaine(this.userjson.domaine).subscribe( (res3:any) =>{
        this.allpapier=res3.data
        console.log(res3)

      })
    }
  }
