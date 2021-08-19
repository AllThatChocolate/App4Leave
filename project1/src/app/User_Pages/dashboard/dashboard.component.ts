import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-dashboard',
  template: `
  <section class="hero is-primary is-bold is-fullheight">
  <app-adminheader></app-adminheader>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          <p> Application For Leave</p>
        </h1>
        <h3>Welcome to the manager page of Application For Leave... <a routerLink="/viewleaves"> Click here to view your tickets waiting to be loggged </a> </h3>
      </div>

      <div class="hero-body">
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

          <div class="card col-md-8 bg-warning" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">About</h5>
              <h6 class="card-subtitle mb-2 text-muted"> </h6><br>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal3" (click)="add_Click()" data-backdrop="static" data-keyboard="false">Click Here to get an overview of the system</a>
            </div>
          </div>
        </div>
      
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

        <!-- Modal 3 -->
            <div class="modal fade bd-example-modal-sm" id="exampleModal3">
              <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModal3Label">Contact Us With this form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeClick()">
                    <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <app-adminabout></app-adminabout>
                  </div>
                </div>
              </div>
            </div>

      </div>
    </div>
    </div>

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

  h5 {
    color: black;
  }
  `
  ]
})
export class DashboardComponent implements OnInit {
 
  constructor(private service:SharedService) { }

  TicketList: any=[];
  ModalTitle:string | undefined;
  ActivateAddEditTicketComp:boolean = false;
  ticket: any;

  TicketIDFilter: string="";
  TicketNameFilter: string="";
  TicketListWithoutFilter: any=[];
  ngOnInit(): void {
    this.refreshTicketList();
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

  closeClick(){
    
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
