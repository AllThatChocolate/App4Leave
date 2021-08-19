import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-emp',
  template: `
  <!-- Register FORM -->
  <form class="has-text-centered">

  <!-- ID -->
  <div class="field">
    <label class= "label">Database Id</label>
    <input type="text" name="Id" class="input" [(ngModel)]="Id" #IdInput="ngModel" required>
    <div class="help is-error" *ngIf= "IdInput.invalid && IdInput.touched">
      Please provide this user an ID
    </div>
  </div><br>

  <!-- USERNAME -->
  <div class="field">
    <label class= "label">User Name</label>
    <input type="text" name="UserName" class="input" [(ngModel)]="UserName" #UserNameInput="ngModel" required>
    <div class="help is-error" *ngIf= "UserNameInput.invalid && UserNameInput.touched">
      Please give us your name
    </div>
  </div><br>


    <!-- FIRSTNAME -->
    <div class="field">
      <label class= "label">First Name</label>
      <input type="text" name="FirstName" class="input" [(ngModel)]="FirstName" #FirstNameInput="ngModel" required>
      <div class="help is-error" *ngIf="FirstNameInput.invalid && FirstNameInput.touched">
        Please give us your name
      </div>
    </div><br>

    <!-- LASTNAME -->
    <div class="field">
      <label class= "label">Last Name</label>
      <input type="text" name="LastName" class="input" [(ngModel)]="LastName" #LastNameInput="ngModel" required>
      <div class="help is-error" *ngIf="LastNameInput.invalid && LastNameInput.touched">
        Please give us your name
      </div>
    </div><br>

    <!-- EMAIL -->
    <div class="field">
      <label class= "label">Email</label>
      <input type="text" name="Email" class="input" [(ngModel)]="Email" #EmailInput="ngModel" [pattern]="emailPattern">
      <div class="help is-error" *ngIf="EmailInput.invalid && EmailInput.touched">
        Please provide us with your email.
      </div>
    </div><br>

    <!-- PASSWORD -->
    <div class="field">
      <label class= "label">Password</label>
      <input type="text" name="Password" class="input" [(ngModel)]="Password" #PasswordInput="ngModel" required>
      <div class="help is-error" *ngIf="PasswordInput.invalid && PasswordInput.touched">
        Please try to come up with a password
      </div>
    </div><br>

    <!-- STAFF NUMBER -->
    <div class="field">
      <label class= "label"> Staff Number</label>
      <input type="text" name="StaffNumber" class="input" [(ngModel)]="StaffNumber" #StaffNumberInput="ngModel" required>
      <div class="help is-error" *ngIf="StaffNumberInput.invalid && StaffNumberInput.touched">
        What is the staff number
      </div>
    </div> <br>

    <!-- NEXT OF KIN ID -->
    <div class="field">
      <label class= "label"> Next of Kin ID</label>
      <input type="text" name="NextOfKinID" class="input" [(ngModel)]="NextOfKinID" #NextOfKinIDInput="ngModel">
      <div class="help is-error" *ngIf="NextOfKinIDInput.invalid && NextOfKinIDInput.touched">
        Who is your next of kin
      </div>
    </div> <br>

    <!-- DESIGNATION -->
    <div class="field">
      <label class= "label"> DesignationID</label>
      <input type="text" name="DesignationID" class="input" [(ngModel)]="DesignationID" #DesignationIDInput="ngModel">
      <div class="help is-error" *ngIf="DesignationIDInput.invalid && DesignationIDInput.touched">
        What is your designation?
      </div>
    </div> <br>

    <!-- ROLEID -->
    <div class="field">
      <label class= "label"> RoleID</label>
      <input type="text" name="RoleID" class="input" [(ngModel)]="RoleID" #RoleIDInput="ngModel">
      <div class="help is-error" *ngIf="RoleIDInput.invalid && RoleIDInput.touched">
        What Role do you play?
      </div>
    </div> <br>

    <!-- TITLE -->
    <div class="field">
      <label class= "label"> Title</label>
      <input type="text" name="Title" class="input" [(ngModel)]="Title" #TitleInput="ngModel" required>
      <div class="help is-error" *ngIf="TitleInput.invalid && TitleInput.touched">
        Mr, Mrs, Ms, Dr, Prof?
      </div>
    </div> <br>

    <!-- LEAVE DAYS AVAILABLE -->
    <div class="field">
      <label class= "label"> Leave Days Available</label>
      <input type="text" name="LeaveDaysAvailable" class="input" [(ngModel)]="LeaveDaysAvailable" #LeaveDaysAvailableInput="ngModel" required>
      <div class="help is-error" *ngIf="LeaveDaysAvailableInput.invalid && LeaveDaysAvailableInput.touched">
        How many leave days are available?
      </div>
    </div> <br>

    <!-- LOGGED ON -->
    <div class="field">
      <label class= "label"> what Time did you log on</label>
      <input type="text" name="LoggedOn" class="input" [(ngModel)]="LoggedOn" #LoggedOnInput="ngModel">
      <div class="help is-error" *ngIf="LoggedOnInput.invalid && LoggedOnInput.touched">
        What time did they log on
      </div>
    </div> <br>

    <!-- DateOfBirth -->
    <div class="field">
      <label class= "label"> What is your date of birth</label>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="yyyy-mm-dd" name="DateOfBirthDateOfBirth" [(ngModel)]="DateOfBirth" ngbDatepicker #dEmployeeDateOfBirth="ngbDatepicker">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary calendar" (click)="dEmployeeDateOfBirth.toggle()" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg>
          </button>
        </div>
      </div>
    </div> <br>

  </form>

    <button (click)="addEmployee()" *ngIf="emp.EmployeeID==0" class="btn btn-primary">Add </button>

    <button (click)="updateEmployee()" *ngIf="emp.EmployeeID!=0" class="btn btn-primary">Update </button>
  `,
  styles: [
  ]
})
export class AddEditEmpComponent implements OnInit {

  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  constructor(private service:SharedService) { }

  @Input() emp: any;
  Id: any;
  UserName: any;
  FirstName: any;
  LastName: any;
  Email: any;
  Password: any;
  StaffNumber: any;
  DesignationID: any;
  NextOfKinID: any;
  RoleID: any;
  Title: any;
  LeaveDaysAvailable: any;
  LoggedOn: any;
  DateOfBirth: any;

  ngOnInit(): void {
    this.Id= this.emp.Id;
    this.UserName=this.emp.UserName;
    this.FirstName=this.emp.FirstName;
    this.LastName=this.emp.LastName;
    this.Email=this.emp.Email;
    this.Password=this.emp.Password;
    this.StaffNumber=this.emp.StaffNumber;
    this.DesignationID=1;
    this.NextOfKinID=1;
    this.RoleID=1;
    this.Title=this.emp.Title;
    this.LeaveDaysAvailable=this.emp.LeaveDaysAvailable;
    this.LoggedOn=this.emp.LoggedOn;
    this.DateOfBirth=this.emp.DateOfBirth.toString();
  }

  addEmployee(){
    var val ={Id:this.Id, FirstName:this.FirstName, LastName:this.LastName, Email:this.Email, Password:this.Password, StaffNumber:this.StaffNumber,
              DesignationID:this.DesignationID, NextOfKinID:this.NextOfKinID, RoleID:this.RoleID, Title:this.Title, LeaveDaysAvailable:this.LeaveDaysAvailable,
              LoggedOn:this.LoggedOn, DateOfBirth:this.DateOfBirth};
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val ={Id:this.Id, FirstName:this.FirstName, LastName:this.LastName, Email:this.Email, Password:this.Password, StaffNumber:this.StaffNumber,
      DesignationID:this.DesignationID, NextOfKinID:this.NextOfKinID, RoleID:this.RoleID, Title:this.Title, LeaveDaysAvailable:this.LeaveDaysAvailable,
      LoggedOn:this.LoggedOn, DateOfBirth:this.DateOfBirth};
    this.service.updateEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }


}
