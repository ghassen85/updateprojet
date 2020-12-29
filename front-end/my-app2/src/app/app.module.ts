import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './login/login.component';
import { ErreurComponent } from './erreur/erreur.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterexpertComponent } from './registerexpert/registerexpert.component';
import { LoginexpertComponent } from './loginexpert/loginexpert.component';
import { RegisterediteurComponent } from './registerediteur/registerediteur.component';
import { LoginediteurComponent } from './loginediteur/loginediteur.component';
import { PapierComponent } from './home/papier/papier.component';
import { DetailschercheurComponent } from './detailschercheur/detailschercheur.component';
import { AllchercheurComponent } from './home/allchercheur/allchercheur.component';
import { HomechercheurComponent } from './home/homechercheur/homechercheur.component';
import { BodyComponent } from './home/body/body.component';
import { LoginpapierComponent } from './loginpapier/loginpapier.component';
import { RegisterpapierComponent } from './home/registerpapier/registerpapier.component';
import { HomeexpertComponent } from './home2/homeexpert/homeexpert.component';
import { RegisteravisComponent } from './home2/registeravis/registeravis.component';
import { AllpapierComponent } from './home2/allpapier/allpapier.component';
import { AllavisComponent } from './home/allavis/allavis.component';
import { AceuilComponent } from './aceuil/aceuil.component';
import { HomeediteurComponent } from './home3/homeediteur/homeediteur.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { VospapierComponent } from './home/vospapier/vospapier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ErreurComponent,
    RegisterComponent,
    RegisterexpertComponent,
    LoginexpertComponent,
    RegisterediteurComponent,
    LoginediteurComponent,
    PapierComponent,
    DetailschercheurComponent,
    AllchercheurComponent,
    HomechercheurComponent,
    BodyComponent,
    LoginpapierComponent,
    RegisterpapierComponent,
    HomeexpertComponent,
    RegisteravisComponent,
    AllpapierComponent,
    AllavisComponent,
    AceuilComponent,
    HomeediteurComponent,
    Home2Component,
    Home3Component,
    VospapierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
