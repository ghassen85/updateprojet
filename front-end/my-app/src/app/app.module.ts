import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './home/home.component';
import { NovbarComponent } from './home/novbar/novbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErreurComponent,
    HomeComponent,
    NovbarComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
