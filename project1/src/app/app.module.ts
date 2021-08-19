import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Headers/header/header.component';
import { FooterComponent } from './Headers/footer/footer.component';
import { HomeComponent } from './User_Pages/home/home.component';
import { ContactComponent } from './Popups/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Popups/about/about.component';
import { LoginComponent } from './User_Pages/login/login.component';
import { DashboardComponent } from './User_Pages/dashboard/dashboard.component';
import { AdminheaderComponent } from './Headers/adminheader/adminheader.component';
import { AdminleaveinformationComponent } from './User_Pages/adminleaveinformation/adminleaveinformation.component';
import { AdminaboutComponent } from './Popups/adminabout/adminabout.component';
import { AdministratorComponent } from './User_Pages/administrator/administrator.component';
import { AddEditEmpComponent } from './Popups/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './Popups/register/register.component';
import { AddEditTicketComponent } from './Popups/add-edit-ticket/add-edit-ticket.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    AdminheaderComponent,
    AdminleaveinformationComponent,
    AdminaboutComponent,
    AdministratorComponent,
    AddEditEmpComponent,
    RegisterComponent,
    AddEditTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()

    
  ],
  providers: [SharedService, UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
