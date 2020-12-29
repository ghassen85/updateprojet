import { ActivatedRoute, Router } from '@angular/router';
import { EditeurService } from './../services/editeur.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginediteur',
  templateUrl: './loginediteur.component.html',
  styleUrls: ['./loginediteur.component.css']
})
export class LoginediteurComponent implements OnInit {
  Email: any;
  Password: any;
  constructor(private editeurservice:EditeurService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  login1(form: NgForm) {

    console.log(this.Email, this.Password);
    const data = {
      email: this.Email,
      password: this.Password
    };

    this.editeurservice.loginchercheur(data).subscribe((res: any) => {
      console.log(res);
      if (res.message === 'Invalid email') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'mail went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }

      if (res.message === 'Invalid password') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'password went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
      if (res.message === 'editeur found') {
        Swal.fire(
          'Good job!',
          'Vous etes editeur',
          'success'
        )
        this.router.navigate(['/home3/homeediteur']);
        localStorage.setItem('userconnect2',JSON.stringify(res['data']))

      }
      else {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'somthing went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })

      }
    })
  }
}
