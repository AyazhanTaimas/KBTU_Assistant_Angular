import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SupportComponent} from "./support/support.component";
import {DisciplineDetailComponent} from "./discipline-detail/discipline-detail.component";
import {ProfileComponent} from "./profile/profile.component";
import {DisciplinesComponent} from "./disciplines/disciplines.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  {path: 'home', component: HomeComponent},
  {path: 'discipline', component: DisciplineDetailComponent},
  {path: 'discipline/:cipher', component: DisciplineDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'support', component: SupportComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'disciplines', component: DisciplinesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
