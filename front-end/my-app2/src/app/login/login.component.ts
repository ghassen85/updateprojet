import { ActivatedRoute, Router } from '@angular/router';
import { ChercheurService } from './../services/chercheur.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email: any;
  Password: any;
  constructor(private route: ActivatedRoute, private router: Router, private loginservice: ChercheurService,
  ) { }

  ngOnInit(): void {
  }
  goToHome() {

    this.router.navigate(['home/homechercheur']);
  }
  login1(form: NgForm) {

    console.log(this.Email, this.Password);
    const data = {
      email: this.Email,
      password: this.Password
    };

    this.loginservice.loginchercheur(data).subscribe((res: any) => {
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
      if (res.message === 'chercheur found') {
        //this.router.navigate(['/home']);
        localStorage.setItem('userconnect', JSON.stringify(res['data']))
        localStorage.setItem('token', res['data'].accesstoken)
        localStorage.setItem('refreshtoken', res['data'].refreshToken)
        console.log(localStorage.getItem('refreshtoken')
        )
        console.log(res['data'].accesstoken)
        Swal.fire(
          'Good job!',
          'Vous etes chercheur',
          'success'
        )
        this.goToHome();

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
