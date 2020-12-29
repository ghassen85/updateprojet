import { ActivatedRoute, Router } from '@angular/router';
import { ExpertService } from './../services/expert.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-loginexpert',
  templateUrl: './loginexpert.component.html',
  styleUrls: ['./loginexpert.component.css']

})
export class LoginexpertComponent implements OnInit {
  Email: any;
  Password: any;
  constructor(private expertservice:ExpertService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  goToHome() {

    this.router.navigate(['home2/homeexpert']);
  }

  login1(form: NgForm) {

    console.log(this.Email, this.Password);
    const data = {
      email: this.Email,
      password: this.Password
    };

    this.expertservice.loginExpert(data).subscribe((res: any) => {
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
      if (res.message === 'expert found') {
        //this.router.navigate(['/home']);
        Swal.fire(
          'Good job!',
          'Vous etes expert',
          'success'
        )
        localStorage.setItem('userconnect1',JSON.stringify(res['data']))
        this.goToHome()

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

