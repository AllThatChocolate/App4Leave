import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-adminleaveinformation',
  template: `
  <section class="hero is-primary is-bold is-fullheight has-text-centered">
    <app-adminheader></app-adminheader>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h3>The following page lets you book leave and also view all the open Leave Applications that might be waiting for you. Click on the dit button to either grant or reject leave applications </h3>
      </div>

      <div class="container has-text-centered">
          <div class="card-deck ">
          <div class="card col-md-8 bg-warning" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Apply For Leave</h5>
            <h6 class="card-subtitle mb-2 text-muted"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
          </svg>
            </h6>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="add_Click()" data-backdrop="static" data-keyboard="false">Use this system to apply for leave  and also check the status of your leave </a>
          </div>
         </div>

        </div></div>

    </div>

    <div class="has-text-centered">
      <!-- LEAVE INFORMATION FORM -->
      
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
    </div>
    </div><br><br>

    <div class="has-text-centered" >

    <!-- Modal -->

    
    
      <table class="table table-striped">

          <thead>
            <tr>
              <th> TicketID </th>
              <th> EmployeeName </th>
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
                <button type="button" class="btn btn-light mr-1" (click)="delete_Click(dataItem)">
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
    <app-footer></app-footer>
  </section>
  `,
  styles: [`
  .hero{
    background-image: linear-gradient(to right , #007D98,  #6DC3CC) !important;
    background-size: cover;
    background-position: center center;
  }

  .input{
    width: 600px;
  }

  .button{
    width: 600px;
    background-color:white;
  }

  .label{
    color: white;
  }

  .textarea{
    height:200px;
  }
  `
  ]
})
export class AdminleaveinformationComponent implements OnInit {

  employeename: any;
  department: any;
  manager:any;
  supervisor: any;
  address: any;

  TicketList: any[] | undefined;
  ModalTitle:string | undefined;
  ActivateAddEditTicketComp:boolean = false;
  ticket: any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshTicketList();
  }

  submitForm(){
    const message = `My name is ${this.employeename}. My department is ${this.department} and my manager is ${this.manager}. While i am away, my address will be ${this.address}`;
    alert(message);
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
    this.refreshTicketList();
  }

  edit_Click(item: any){
    this.ticket=item;
    this.ModalTitle="Edit Ticket";
    this.ActivateAddEditTicketComp=true;
  }

  delete_Click(item: any){
    if (confirm('Are you Sure you want to delete this record?')){
      this.service.deleteTicket(item.TicketID).subscribe(data=>{
        alert(data.toString());
        this.refreshTicketList();
      })
    }
  }

  refreshTicketList(){
    this.service.getTicketList().subscribe((data: any[] | undefined)=>{
      this.TicketList =data;
    });
  }
}
