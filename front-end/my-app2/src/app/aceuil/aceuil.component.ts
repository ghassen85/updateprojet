import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.component.html',
  styleUrls: ['./aceuil.component.css']
})
export class AceuilComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }
  goTologin(){
    this.router.navigate(['/login']);
  }
  goTOloginexpert(){
    this.router.navigate(['/loginexpert'])
  }
  goTOloginediteur(){
    this.router.navigate(['/loginediteur'])
  }
  goTOloginvisteur(){
    this.router.navigate(['/home'])

  }
}
