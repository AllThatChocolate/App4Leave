import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';
import { SignInData } from '../../model/signInData';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  template: `

  <section class="hero is-primary is-bold is-fullheight has-text-centered">
  <div class="navbar-end">
      <a class="navbar-item" data-bs-toggle="modal" data-bs-target="#exampleModal1"  data-backdrop="static" data-keyboard="false"> Get Credentials </a>
      <a class="navbar-item" data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="add_Click()" data-backdrop="static" data-keyboard="false"> Click Here to get registered </a>
    </div>
    <div class="hero-body container has-text-centered ">
      <form (ngSubmit)="onSubmit(UserName.value, Password.value)" #loginForm="ngForm">
          <h1 class="title has-text-centered">PLEASE SIGN IN</h1>
          <input class="input" type="text" #UserName ngModel name="UserName" placeholder="Username" required> <br><br>

          <input class="input" type="password" #Password ngModel name="Password" placeholder="Password" required> <br><br>

          <button [disabled]="!loginForm.valid" class="button is-large btn-submit" type="submit" >Sign in</button><br>

          <div class="alert alert-danger" role="alert" *ngIf="isFormValid">
              Please fill all fields.
          </div>
          <div class="alert alert-danger" role="alert" *ngIf="areCredentialsInvalid">
              Invalid user or password.
          </div>
      </form>
  </div><br>
      
    <div>
      <!-- Modal -->
      <div class="modal fade bd-example-modal-sm" id="exampleModal">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Register</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="close_Click()">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <app-register></app-register>
            </div>
          </div>
        </div>
      </div>
    </div><br><br>

    
    
    <!-- Modal -->
    <div class="modal fade bd-example-modal-sm" id="exampleModal1">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModal1Label">Login Credentials</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="close_Click()">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <h1 style="color: black;">Username: admin</h1><h1 style="color: black;">Password: admin</h1><br><br>
            <h2 style="color: black;">Username: employee</h2><h2 style="color: black;">Password: employee</h2><br><br>
            <h3 style="color: black;">Username: manager</h3><h3 style="color: black;">Password: manager</h3><br><br>
            </div>
          </div>
        </div>
      </div>
      <br><br><br>
</section>

  `,
  styles: [`
  .hero{
    background-image: linear-gradient(140deg , #007D98,  #6DC3CC) !important;
    background-size: cover;
    background-position: center center;
  }

  .input{
    width: 600px;
  }

  .input.ng-invalid.ng-dirty{
    border-bottom-color : #e91e63 !important;
    box-shadow : 0 1px 0 0 #e91e63 !important;
  }

  .button{
    width: 600px;
    background-color:white;
  }

  .label{
    color: white;
  }`]
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  isLoginError: Boolean = false;

  constructor(private authenticationService: AuthenticationService, private userService: UserService, private router: Router) { }

  TicketList: any=[];
  ModalTitle:string | undefined;
  ActivateAddEditTicketComp:boolean = false;
  ticket: any;

  TicketIDFilter: string="";
  TicketNameFilter: string="";
  TicketListWithoutFilter: any=[];
  ngOnInit(): void {
 
  }

  add_Click(){
    this.ticket={
      TicketID: 0,
      EmployeeName: "",
      EmployeeMail: "",
      EmployeeCell: "",
      EmployeeStart: "",
      EmployeeEnd: "",
      EmployeeAddress: "",
      EmployeeAbsenceType: "",
      EmployeeManager: "",
      EmployeeID: "",
      EmployeeApproval: ""
    }
    this.ModalTitle="Add Ticket";
    this.ActivateAddEditTicketComp=true;
  }

  close_Click(){
    this.ActivateAddEditTicketComp=false;
  }

  onSubmit(UserName: any, Password: any) {

    if ((UserName =="admin") && (Password == "admin"))
    {
      this.router.navigate(['/administrator']);
    }
    else if ((UserName =="employee") && (Password== "employee"))
    {
      this.router.navigate(['/home']);
    }
    else if ((UserName =="manager") && (Password== "manager"))
    {
      this.router.navigate(['/dashboard']);
    }
    else{alert("You have entered incorrect credentials. Please try again");}

  }

}
