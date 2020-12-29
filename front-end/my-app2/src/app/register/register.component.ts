import { DomaineService } from './../services/domaine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChercheurService } from './../services/chercheur.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   register:FormGroup;
  submitted=false;
  fileToUpload: any=null;
  resultat:any;
  resultat1:any;

  constructor(private route : ActivatedRoute,private router:Router, private fromBuilder:FormBuilder ,
    private chercheurService: ChercheurService,private domaineservice:DomaineService) {
     this.register=this.fromBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      image: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
     domaine:['', Validators.required]},
     {
      validator: this.MustMatch('password', 'confirmPassword')
  }); }
   uploadimage(event : any) {

    this.fileToUpload = (event.target).files[0];
    console.log(this.fileToUpload);

  }
  goToHome() {

    this.router.navigate(['/login']);
  }
    onReset() {
    this.submitted = false;
    this.register.reset();
  }
   get f() {
    return this.register.controls;
  }

  ngOnInit(): void {
    this.getAlldomaines()

    }


  save() {
    const formdata = new FormData();
    formdata.append('name', this.register.value.name);
    formdata.append('email', this.register.value.email);
    formdata.append('image', this.fileToUpload);
    formdata.append('password', this.register.value.password);
    formdata.append('domaine',this.register.value.domaine)


    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }
    console.log(this.register.value);
    // display form values on success
    this.chercheurService.addchercheur(formdata).subscribe(res => {
      console.log(res);
    });
    this.goToHome();
  }

  getAlldomaines(){
    this.domaineservice.getAlldomaine().subscribe((res:any)=>{
      this.resultat1=res.data ;
      console.log(res)
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
