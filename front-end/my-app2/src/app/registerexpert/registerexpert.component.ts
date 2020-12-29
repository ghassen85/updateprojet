import { ActivatedRoute, Router } from '@angular/router';
import { ExpertService } from './../services/expert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerexpert',
  templateUrl: './registerexpert.component.html',
  styleUrls: ['./registerexpert.component.css']
})
export class RegisterexpertComponent implements OnInit {
  register:FormGroup;
  submitted=false;
  resultat2:any;

  constructor(private route : ActivatedRoute,private router:Router,private fromBuilder:FormBuilder , private expertservice: ExpertService) {

    this.register=this.fromBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
   avis:['', Validators.required],
   domaine:['', Validators.required]}
   , {
    validator: this.MustMatch('password', 'confirmPassword')
                                          });
}


get f() { return this.register.controls;}
ngOnInit(): void {
  this.gelAllexperts()
 }
 goToHome() {

  this.router.navigate(['/loginexpert']);
}
save() {
  const formdata = new FormData();
  console.log("dataa : ",this.register.value)

  formdata.append('name', this.register.value.name);
  formdata.append('email', this.register.value.email);
  formdata.append('password', this.register.value.password);
  formdata.append('avis',this.register.value.avis)
  formdata.append('domaine',this.register.value.domaine)


  this.submitted = true;

  // stop here if form is invalid
  if (this.register.invalid) {
    return;
  }
  console.log(this.register.value);

  this.expertservice.addExpert(this.register.value).subscribe(res=> {console.log(res)});
  this.goToHome()
}


gelAllexperts(){
  this.expertservice.getAllexpert().subscribe((res:any)=>
  {
    this.resultat2=res.data ;
    console.log(this.resultat2)
  });
}
MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}


}
