import { PapierService } from './../../services/papier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeexpert',
  templateUrl: './homeexpert.component.html',
  styleUrls: ['./homeexpert.component.css']
})
export class HomeexpertComponent implements OnInit {
  user:any;
  userjson:any;

  constructor(private route:ActivatedRoute, private router: Router,private papierservice:PapierService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('userconnect1');

    this.userjson=JSON.parse(this.user)['expert']
    console.log(this.user)
    console.log(this.userjson)
    this.papierservice.getpapier().subscribe(res=>{

      console.log(res)
    })
  }

  goTovoirpapier(){
    this.router.navigate(['/home2/Allpapier'])
  }
  remove(){
    this.user=localStorage.removeItem('userconnect1');

    this.router.navigate(['/login'])
  }
}
