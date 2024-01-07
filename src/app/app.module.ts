import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './main/base/base.component';
import { LoginComponent } from './logsign/login/login.component';
import { SignupComponent } from './logsign/signup/signup.component';
import { MainComponent } from './device/main/main.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireAuth } from '@angular/fire/compat/auth'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BaseComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule
  ],
  providers: [DatePipe],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
