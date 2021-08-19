import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Popups/about/about.component';
import { AdminaboutComponent } from './Popups/adminabout/adminabout.component';
import { AdministratorComponent } from './User_Pages/administrator/administrator.component';
import { AdminleaveinformationComponent } from './User_Pages/adminleaveinformation/adminleaveinformation.component';
import { DashboardComponent } from './User_Pages/dashboard/dashboard.component';
import { HomeComponent } from './User_Pages/home/home.component';
import { LoginComponent } from './User_Pages/login/login.component';
import { RegisterComponent } from './Popups/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './Popups/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},//, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent, },
  {path: 'adminabout', component: AdminaboutComponent, },
  {path: 'dashboard', component: DashboardComponent, },
  {path: 'viewleaves', component: AdminleaveinformationComponent},
  {path: 'adminabout', component: AdminaboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'administrator', component: AdministratorComponent},
  {path: '', redirectTo:"/login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
