import { PapierService } from './../../services/papier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vospapier',
  templateUrl: './vospapier.component.html',
  styleUrls: ['./vospapier.component.css']
})
export class VospapierComponent implements OnInit {
allpapier:any;
user:any;
userjson:any;
  constructor(private papierservice:PapierService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('userconnect');

    this.userjson=JSON.parse(this.user)['chercheur']

    console.log(this.user)
    console.log(this.userjson)

    this.getAllpapier()
    }
    getAllpapier  (){
      this.papierservice.getonechercheur(this.userjson._id).subscribe( (res3:any) =>{
        console.log("aaaa")
        this.allpapier=res3.data
        console.log("resltat",this.allpapier)

      })
    }

  }
