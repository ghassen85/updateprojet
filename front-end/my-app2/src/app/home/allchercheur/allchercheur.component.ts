import { ChercheurService } from './../../services/chercheur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allchercheur',
  templateUrl: './allchercheur.component.html',
  styleUrls: ['./allchercheur.component.css']
})
export class AllchercheurComponent implements OnInit {
Allchercheur:any;
  constructor(private chercheurservice:ChercheurService) { }

  ngOnInit(): void {
  this.getAllchercheur()
  }
  getAllchercheur(){
    this.chercheurservice.getAllchercheur().subscribe( (res3:any) =>{
      this.Allchercheur=res3.data
      console.log(this.Allchercheur)

    })
  }

}
