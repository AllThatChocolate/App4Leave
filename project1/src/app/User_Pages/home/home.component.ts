import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold is-fullheight">
  <app-header></app-header>
    <div class="hero-body row">
      <div class="container has-text-centered">

      <div class="container has-text-centered col-md-8">
        <h1 class="title">
          <p> Application For Leave</p>
        </h1>
        <h3>Welcome to the Application For Leave Sytem... to book Leave, click on the card </h3>
      </div><br><br>

      <div class="card-deck">
            <div class="card col-md-8 bg-warning" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Apply For Leave</h5>
              <h6 class="card-subtitle mb-2 text-muted"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
                <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
              </svg>
              </h6>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal" (click)="add_Click()" data-backdrop="static" data-keyboard="false">Use this system to apply for leave and also check the status of your leave</a>
            </div>
          </div>
          <div class="card col-md-8 bg-warning" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Contact Us</h5>
              <h6 class="card-subtitle mb-2 text-muted"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
              </h6>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal2" (click)="add_Click()" data-backdrop="static" data-keyboard="false">Click Here to send us a message</a>
            </div>
          </div>
          <div class="card col-md-8 bg-warning" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">About</h5>
              <h6 class="card-subtitle mb-2 text-muted"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
              </h6>
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

      <!-- Modal 2 -->
            <div class="modal fade bd-example-modal-sm" id="exampleModal2">
              <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModal2Label">Contact Us With this form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeClick()">
                    <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <app-contact></app-contact>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 3 -->
            <div class="modal fade bd-example-modal-sm" id="exampleModal3">
              <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModal3Label">Would you like to know what this system is about?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" (click)="closeClick()">
                    <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <app-about></app-about>
                  </div>
                </div>
              </div>
            </div>

    </div>
      </div>
    </div>

    <div class="row" *ngIf="userClaims">
      <div class="card">
        <div class="card-content">
          <span>Username: {{userClaims.UserName}}</span><br>
          <span>First Name: {{userClaims.FirstName}}</span><br>
          <span>Last Name: {{userClaims.LastName}}</span><br>
          <span>LoggedOn: {{userClaims.LoggedOn}}</span><br>
        </div>
      </div>
    </div>

    <app-footer></app-footer>
  </section>
  `,
  styles: [`
  .hero{
    background-image: linear-gradient(140deg ,  #6DC3CC, #007D98) !important;
    background-size: cover;
    background-position: center center;
  }

  h5 {color: black;}
  `
  ]
})
export class HomeComponent implements OnInit {

  userClaims: any;
  ticket: any;
  ModalTitle:string | undefined;
  ActivateAddEditTicketComp:boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any)=> {
      this.userClaims = data;
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
  }

  close_Click(){
    this.ActivateAddEditTicketComp=false;
    alert("Your Apllication for leave has been logged");
  }

  closeClick(){
    
  }

  edit_Click(item: any){
    this.ticket=item;
    this.ModalTitle="Edit Ticket";
    this.ActivateAddEditTicketComp=true;
  }

}
