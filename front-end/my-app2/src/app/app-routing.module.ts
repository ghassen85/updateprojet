import { VospapierComponent } from './home/vospapier/vospapier.component';
import { Home3Component } from './home3/home3.component';
import { AuthenticationediGuard } from './authenticationedi.guard';
import { Home2Component } from './home2/home2.component';
import { HomeediteurComponent } from './home3/homeediteur/homeediteur.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { AllpapierComponent } from './home2/allpapier/allpapier.component';
import { AuthenticationGuard } from './authentication.guard';
import { AllavisComponent } from './home/allavis/allavis.component';
import { RegisteravisComponent } from './home2/registeravis/registeravis.component';
import { HomeexpertComponent } from './home2/homeexpert/homeexpert.component';
import { RegisterpapierComponent } from './home/registerpapier/registerpapier.component';
import { BodyComponent } from './home/body/body.component';
import { HomechercheurComponent } from './home/homechercheur/homechercheur.component';
import { AllchercheurComponent } from './home/allchercheur/allchercheur.component';
import { RegisterediteurComponent } from './registerediteur/registerediteur.component';
import { LoginediteurComponent } from './loginediteur/loginediteur.component';
import { RegisterexpertComponent } from './registerexpert/registerexpert.component';
import { LoginexpertComponent } from './loginexpert/loginexpert.component';
import { RegisterComponent } from './register/register.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationexpGuard } from './authenticationexp.guard';

const routes: Routes = [
  {path:'',component:AceuilComponent},
  { path: 'login', component: LoginComponent} ,
  {path: 'home', component: HomeComponent,children:
    [
      {path: '', component: BodyComponent},
      {path: 'Allchercheur', component: AllchercheurComponent},
      {path: 'homechercheur', component: HomechercheurComponent},
      {path: 'registerpapier', component: RegisterpapierComponent },
      {path: 'allavis/:id', component: AllavisComponent},
      {path: 'vospapier', component: VospapierComponent },

    ],canActivate : [AuthenticationGuard]

  } ,
  {path: 'home2', component: Home2Component,children:
    [
      {path: '', component: BodyComponent},
      {path: 'homeexpert', component: HomeexpertComponent},
      {
        path: 'registeravis/:id', component:RegisteravisComponent
      },
      {
        path: 'Allpapier', component: AllpapierComponent
      }
    ],canActivate : [AuthenticationexpGuard]

  },
  {path: 'home3', component: Home3Component,children:
    [
      {path: '', component: BodyComponent},
      {path:'homeediteur',component:HomeediteurComponent},

    ],canActivate : [AuthenticationediGuard]

  },




  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'loginexpert', component: LoginexpertComponent
  },
  {
    path: 'registerexpert', component: RegisterexpertComponent
  },
  {
    path: 'loginediteur', component: LoginediteurComponent
  },
  {
    path: 'registerediteur', component: RegisterediteurComponent
  },


  {
    path: '**', component:ErreurComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
