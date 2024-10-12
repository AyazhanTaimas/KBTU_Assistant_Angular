import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {DisciplineDetailComponent} from "./discipline-detail/discipline-detail.component";
import { SupportComponent } from './support/support.component';
import {ProfileComponent} from "./profile/profile.component";
import {DisciplinesComponent} from "./disciplines/disciplines.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DisciplineDetailComponent,
    SupportComponent,
    ProfileComponent,
    DisciplinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
