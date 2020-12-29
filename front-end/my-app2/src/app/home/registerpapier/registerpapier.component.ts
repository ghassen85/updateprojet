import { ActivatedRoute, Router } from '@angular/router';
import { ChercheurService } from './../../services/chercheur.service';
import { PapierService } from './../../services/papier.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerpapier',
  templateUrl: './registerpapier.component.html',
  styleUrls: ['./registerpapier.component.css']
})
export class RegisterpapierComponent implements OnInit {
registerpapier:FormGroup;
submitted=false;
resultat3:any;
fileToUpload:any = null;
user:any;
userjson:any;
  constructor(private route:ActivatedRoute,private router:Router,private frombuiler:FormBuilder,private papierservice:PapierService,private chercheurservice:ChercheurService) {
    this.registerpapier=this.frombuiler.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      chercheur: ['', Validators.required],
      domaine: ['', Validators.required]
     }
     )
  }
  goToHome() {

    this.router.navigate(['home/homechercheur']);
  }
  uploadimage(event : any) {

    this.fileToUpload = (event.target).files[0];
    console.log(this.fileToUpload);

  }
  ngOnInit(): void {
    this.user=localStorage.getItem('userconnect');

    this.userjson=JSON.parse(this.user)['chercheur']
    //console.log(this.user)
    console.log(this.userjson.domaine)
    this.gelAllchercheurs()
  }

  get f() { return this.registerpapier.controls;}

save() {
  const formdata = new FormData();
  console.log("dataa : ",this.registerpapier.value)
  formdata.append('name', this.registerpapier.value.name);
  formdata.append('image', this.fileToUpload);
  this.registerpapier.patchValue({chercheur:this.userjson._id})
  this.registerpapier.patchValue({domaine:this.userjson.domaine})

  console.log('papier data',this.registerpapier.value)

  formdata.append('chercheur',this.registerpapier.value.chercheur)
  formdata.append('domaine',this.registerpapier.value.domaine)


   // console.log(this.registerpapier.value)
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerpapier.invalid) {

    return;
  }
  console.log(formdata);

  this.papierservice.addpapier(formdata).subscribe(res=> {console.log(res)});
  this.goToHome();
}
gelAllchercheurs(){
  this.chercheurservice.getAllchercheur().subscribe((res3:any)=>
  {
    this.resultat3=res3 ;
    console.log(this.resultat3)
  });
}

}
