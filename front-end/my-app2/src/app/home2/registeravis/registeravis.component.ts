import { environment } from './../../../environments/environment';
import { PapierService } from './../../services/papier.service';
import { ExpertService } from './../../services/expert.service';
import { AvisService } from './../../services/avis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeravis',
  templateUrl: './registeravis.component.html',
  styleUrls: ['./registeravis.component.css']
})
export class RegisteravisComponent implements OnInit {

id=this.activited.snapshot.params.id

register:FormGroup;
submitted = false;
resultat:any;
user:any;
userjson:any;
idexpert:any;
namepapier:any;
  constructor(private formbuilder:FormBuilder,private activited:ActivatedRoute,private router:Router,private avisservice:AvisService
    ,private expertservice:ExpertService ,private papierservice:PapierService) {
    this.register=this.formbuilder.group({
      description: ['', Validators.required],
     expert:['', Validators.required],
     papier:['',Validators.required],


  });
}

  goToHome() {

    this.router.navigate(['home2/homeexpert']);
  }
    onReset() {
    this.submitted = false;
    this.register.reset();
  }
   get f() {
    return this.register.controls;
  }

  ngOnInit(): void {
console.log(this.id);

    this.getAllexperts();
    this.getpapier(this.id);

    }


  save() {

    this.user=localStorage.getItem('userconnect1');
    this.userjson=JSON.parse(this.user)['expert']
    this.idexpert=this.userjson._id
    this.register.patchValue({expert:this.idexpert})
    this.register.patchValue({papier:this.id})
  /*   const formdata = new FormData();
    formdata.append('description',this.register.value.description)
    formdata.append('expert',this.register.value.expert)
    formdata.append('papier',this.register.value.papier) */


    //console.log(this.user)
   // console.log(this.idexpert)
  //console.log(this.a);


  //  console.log(formdata)
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }
    console.log(this.register.value);
    // display form values on success
    this.avisservice.addavis(this.register.value).subscribe(res => {
      console.log(res);
    });
    this.goToHome();
  }
  getAllexperts(){
    this.expertservice.getAllexpert().subscribe((res:any)=>{
      this.resultat=res['data'] ;
      console.log(this.resultat)
    })
  }
getpapier(id:any){
  return this.papierservice.getone(this.id).subscribe((res:any)=>{
this.namepapier=res['data'].name
    console.log(res)
  })
}



}
