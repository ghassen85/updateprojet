import { EditeurService } from './../services/editeur.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerediteur',
  templateUrl: './registerediteur.component.html',
  styleUrls: ['./registerediteur.component.css']
})
export class RegisterediteurComponent implements OnInit {
  submitted=false;
  registerediteur:FormGroup;
  a:any;


  constructor( private fromBuilder:FormBuilder , private editeurservice:EditeurService) {
    this.registerediteur=this.fromBuilder.group({
     name: ['', Validators.required],
     email: ['', [Validators.required,Validators.email]],
     password: ['', Validators.required]
    ,  confirmPassword: ['', Validators.required]

  },
  {
     validator: this.MustMatch('password', 'confirmPassword')
 } ); }

   onReset() {
   this.submitted = false;
   this.registerediteur.reset();
 }
  get f() {
   return this.registerediteur.controls;
 }

 ngOnInit(): void {
  this.gelAllediteurs()
 }

 saveed() {
  const formdata = new FormData();

  console.log("dataa : ",this.registerediteur.value)
  formdata.append('name', this.registerediteur.value.name);
  formdata.append('email', this.registerediteur.value.email);
  formdata.append('password', this.registerediteur.value.password);



  this.submitted = true;

  // stop here if form is invalid
  if (this.registerediteur.invalid) {
    return;
  }
  console.log(this.registerediteur.value);
  // display form values on success
  this.editeurservice.addEditeur(this.registerediteur.value).subscribe(res1 => {
    console.log(res1);
  });
}

 gelAllediteurs(){
   this.editeurservice.getAllEditeur().subscribe((res1:any)=>{
     //this.a=res1.data
     console.log(res1)
   })
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
