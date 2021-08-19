import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-administrator',
  template: `

  <section class="hero is-primary is-bold is-fullheight has-text-centered">
    <div class="navbar-end">
        <a class= "navbar-item" routerLink="/register">Not Registered? Click here to get added to the es3 database.</a>
        <a class= "navbar-item" routerLink="/">Already registered? Click here to login in</a>
        <a class= "navbar-item" routerLink="/dashboard">Admin Home</a>
        <a class= "navbar-item" routerLink="/viewleaves">Manager Leave Page</a>
        <a class= "navbar-item" routerLink="/">Logout</a>
        <a class= "navbar-item" routerLink="/home">Employee Home</a>
    </div>

    

    <div class="hero-body">
    

    <table class="table table-striped">

        <thead>
          <tr>
            <th> 
              <div class="d-flex flex-row">
                <input [(ngModel)]="EmployeeIDFilter  " class="form-control" (keyup)="FilterFn()" placeholder="Filter">
              </div>
              UserName 
            </th>
            <th> FirstName </th>
            <th> LastName </th>
            <th> Email </th>
            <th> Password </th>
            <th> StaffNumber </th>
            <th> DesignationID </th>
            <th> NextOfKinID </th>
            <th> RoleID </th>
            <th> Title </th>
            <th> LeaveDaysAvailable </th>
            <th> LoggedOn </th>
            <th> DateOfBirth </th>
            <th> Options </th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let dataItem of EmployeeList">
            <td>{{dataItem.UserName}}</td>
            <td>{{dataItem.FirstName}}</td>
            <td>{{dataItem.LastName}}</td>
            <td>{{dataItem.Email}}</td>
            <td>{{dataItem.Password}}</td>
            <td>{{dataItem.StaffNumber}}</td>
            <td>{{dataItem.DesignationID}}</td>
            <td>{{dataItem.NextOfKinID}}</td>
            <td>{{dataItem.RoleID}}</td>
            <td>{{dataItem.Title}}</td>
            <td>{{dataItem.LeaveDaysAvailable}}</td>
            <td>{{dataItem.LoggedOn}}</td>
            <td>{{dataItem.DateOfBirth}}</td>
            <td>
              <button type="button" class="btn btn-light mr-1"
              data-bs-toggle="modal" data-bs-target="#exampleModal1" (click)="editClick(dataItem)" data-backdrop="static" data-keyboard="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
              </button>
              <button type="button" class="btn btn-light mr-1"
              (click)="deleteClick(dataItem)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
              </button>
            </td>
          </tr>
        </tbody>

      </table>
      <br><br>

      <div>
      <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary float-right m-2" data-bs-toggle="modal" data-bs-target="#exampleModal1" (click)="addClick()" data-backdrop="static" data-keyboard="false">
      Add Employee
    </button>
    
    <!-- Modal -->
    <div class="modal fade bd-example-modal-sm" id="exampleModal1">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModal1Label">{{ModalTitle1}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeClick()">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <app-add-edit-emp [emp]="emp" *ngIf="ActivateAddEditEmpComp"></app-add-edit-emp>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  
    </div>

  
    <!-- Tickets -->
    <div class="hero-body">

    <div>
      <!-- Modal -->
      <div class="modal fade bd-example-modal-sm" id="exampleModal">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{ModalTitle}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="close_Click()">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <app-add-edit-ticket [ticket]="ticket" *ngIf="ActivateAddEditTicketComp"></app-add-edit-ticket>
            </div>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary float-right m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="add_Click()" data-backdrop="static" data-keyboard="false">
        Add Ticket
      </button>
    </div>

    

    <table class="table table-striped">

        <thead>
          <tr>
            <th> 
              <div class="d-flex flex-row">
                <input [(ngModel)]="TicketIDFilter  " class="form-control" (keyup)="Filter_Fn()" placeholder="Filter">
              </div>
              TicketID 
            </th>
            <th> 
              <div class="d-flex flex-row">
                <input [(ngModel)]="TicketIDFilter  " class="form-control" (keyup)="Filter_Fn()" placeholder="Filter">
              </div>
              EmployeeName 
            </th>
            <th> EmployeeMail </th>
            <th> EmployeeCell </th>
            <th> EmployeeStart </th>
            <th> EmployeeEnd </th>
            <th> EmployeeAddress </th>
            <th> EmployeeAbsenceType </th>
            <th> EmployeeManager </th>
            <th> EmployeeID </th>
            <th> EmployeeApproval </th>
            <th> Options </th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let dataItem of TicketList">
            <td>{{dataItem.TicketID}}</td>
            <td>{{dataItem.EmployeeName}}</td>
            <td>{{dataItem.EmployeeMail}}</td>
            <td>{{dataItem.EmployeeCell}}</td>
            <td>{{dataItem.EmployeeStart}}</td>
            <td>{{dataItem.EmployeeEnd}}</td>
            <td>{{dataItem.EmployeeAddress}}</td>
            <td>{{dataItem.EmployeeAbsenceType}}</td>
            <td>{{dataItem.EmployeeManager}}</td>
            <td>{{dataItem.EmployeeID}}</td>
            <td>{{dataItem.EmployeeApproval}}</td>
            <td>
              <button type="button" class="btn btn-light mr-1"
              data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="edit_Click(dataItem)" data-backdrop="static" data-keyboard="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
              </button>
              <button type="button" class="btn btn-light mr-1"
              (click)="delete_Click(dataItem)"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
              </button>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

  </section>
  `,
  styles:[`
  .hero{
    background-image: linear-gradient(140deg , #007D98,  #6DC3CC) !important;
    background-size: cover;
    background-position: center center;
  }

  .button{
    width: 400px;
  }
  
  @keyframes gradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
  `]
})
export class AdministratorComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  TicketList: any=[];
  ModalTitle:string | undefined;
  ModalTitle1:string | undefined;
  ActivateAddEditEmpComp:boolean = false;
  ActivateAddEditTicketComp:boolean = false;
  emp: any;
  ticket: any;

  EmployeeIDFilter: string="";
  EmployeeNameFilter: string="";
  EmployeeListWithoutFilter: any=[];

  TicketIDFilter: string="";
  TicketNameFilter: string="";
  TicketListWithoutFilter: any=[];
  ngOnInit(): void {
    this.refreshEmployeeList();
    this.refreshTicketList();
  }

  addClick(){
    this.emp={
      EmployeeID: 0,
      EmployeeName: "",
      EmployeeMail: "",
      EmployeePassword: "",
      EmployeeManagerStatus: ""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }
  

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmployeeList();
  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item: any){
    if (confirm('Are you ure you want to delete this record?')){
      this.service.deleteEmployee(item.EmployeeID).subscribe(data=>{
        alert(data.toString());
        this.refreshEmployeeList();
      })
    }
  }
  

  refreshEmployeeList(){
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeList =data;
      this.EmployeeListWithoutFilter=data;
    });
  }

  FilterFn(){
    var EmployeeIDFilter = this.EmployeeIDFilter;
    var EmployeeNameFilter = this.EmployeeNameFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function(el: any){
      return el.EmployeeID.toString().toLowerCase().includes(
        EmployeeIDFilter.toString().trim().toLowerCase()
      )&&
      el.EmployeeName.toString().toLowerCase().includes(
        EmployeeNameFilter.toString().trim().toLowerCase()
      )

    });
  }

  Filter_Fn(){
    var TicketIDFilter = this.TicketIDFilter;
    var TicketNameFilter = this.TicketNameFilter;

    this.TicketList = this.TicketListWithoutFilter.filter(function(tic: any){
      return tic.TicketID.toString().toLowerCase().includes(
        TicketIDFilter.toString().trim().toLowerCase()
      )&&
      tic.TicketName.toString().toLowerCase().includes(
        TicketNameFilter.toString().trim().toLowerCase()
      )

    });
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
    this.refreshTicketList();
  }
  

  close_Click(){
    this.ActivateAddEditTicketComp=false;
    this.refreshTicketList();
  }

  edit_Click(item: any){
    this.ticket=item;
    this.ModalTitle="Edit Ticket";
    this.ActivateAddEditTicketComp=true;
  }

  delete_Click(item: any){
    if (confirm('Are you ure you want to delete this record?')){
      this.service.deleteTicket(item.TicketID).subscribe(data=>{
        alert(data.toString());
        this.refreshTicketList();
      })
    }
  }

  refreshTicketList(){
    this.service.getTicketList().subscribe(data=>{
      this.TicketList =data;
      this.TicketListWithoutFilter=data;
    });
  }

}
