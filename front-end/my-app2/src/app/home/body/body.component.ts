import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private route : ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
  }
  goTOchercheur(){
    this.router.navigate(['/login']);
  }
  goTOEditeur(){
    this.router.navigate(['/loginediteur']);
  }
  goTOExpert(){
    this.router.navigate(['/loginexpert']);
  }
}
