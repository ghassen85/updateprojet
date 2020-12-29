import { PapierService } from './../../services/papier.service';
import { ActivatedRoute } from '@angular/router';
import { ExpertService } from './../../services/expert.service';
import { AvisService } from './../../services/avis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allavis',
  templateUrl: './allavis.component.html',
  styleUrls: ['./allavis.component.css']
})
export class AllavisComponent implements OnInit {
  allavis:any;
  allavis1:any;
user:any;
a:any;
userjson:any;
id=this.activited.snapshot.params.id

  constructor(private activited:ActivatedRoute,private avisservice:AvisService,
    private expertservice : ExpertService,
    private papierservice : PapierService) { }

  ngOnInit(): void {

    this.getAllavis()
    }
    getAllavis  (){
      this.avisservice.getoneavis(this.id).subscribe( (res3:any) =>{
        this.allavis=res3.data
        this.allavis1=this.allavis[0].papier.name
        console.log(this.allavis1)

      })
    }
  getonepapier(){
this.papierservice.getone(this.allavis1).subscribe(res3=>{

  console.log(res3)
})
  }



  }
