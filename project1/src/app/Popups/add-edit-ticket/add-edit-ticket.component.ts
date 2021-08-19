import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-ticket',
  template: `
  <div class="form-group row">



    <label class="col-sm-2 col-form-label label">TicketID</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="TicketID" placeholder="Please provide a TicketID">
    </div>

    <label class="col-sm-2 col-form-label label">Employee Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="EmployeeName" placeholder="Please enter the employee name">
    </div>

    <label class="col-sm-2 col-form-label label">Employee email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="EmployeeMail" placeholder="Please enter your email">
    </div>

    <label class="col-sm-2 col-form-label label">Employee Cell Number</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="EmployeeCell" placeholder="Please enter your cellphone number here">
    </div>

    <label class="col-sm-2 col-form-label label">Leave Dates</label>
    <div class="col-sm-10">
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group"> <p class="label">Start</p> &nbsp; 
            <input type="text" class="form-control" placeholder="yyyy-mm-dd" name="EmployeeStart" [(ngModel)]="EmployeeStart" ngbDatepicker #dEmployeeStart="ngbDatepicker">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary calendar" (click)="dEmployeeStart.toggle()" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
              </button>
            </div>
          </div>&nbsp; &nbsp; &nbsp; &nbsp; 

          <div class="input-group"> <p class="label">End</p> &nbsp; 
            <input type="text" class="form-control" placeholder="yyyy-mm-dd" name="EmployeeEnd" [(ngModel)]="EmployeeEnd" ngbDatepicker #dEmployeeEnd="ngbDatepicker">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary calendar" (click)="dEmployeeEnd.toggle()" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
      <br>
    </div>

    <label class="col-sm-2 col-form-label label">Employee Address</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="EmployeeAddress" placeholder="Please enter where we can find you"><br>
    </div>

    <label for="EmployeeAbsenceType" class="label">What is the nature of your ailment:</label>
    <div>
    <select class="test" name="EmployeeAbsenceType" id="EmployeeAbsenceType" [(ngModel)]="EmployeeAbsenceType">
      <option value="Bereavement">Bereavement</option>
      <option value="Maternity">Maternity</option>
      <option value="Accrued Annual Leave">Accrued Annual Leave</option>
      <option value="Advanced Annual Leave">Advanced Annual Leave</option>
      <option value="Study Leave">Study Leave</option>
      <option value="Sick Leave">Sick Leave</option>
      <option value="Advanced Sick Leave">Advanced Sick Leave</option>
      <option value="Other">Other</option>
    </select></div><br>

    <label for="EmployeeManager" class="label">Who is your manaager?</label>
    <div>
  <select class="test" name="EmployeeManager" id="EmployeeManager" [(ngModel)]="EmployeeManager">
    <option value="Ben Tennyson">Ben Tennyson</option>
    <option value="Rex Salazar"> Rex Salazar</option>
    <option value="Yugi Moto">yugi Moto</option>
    <option value="Manny Rievera (El Tigre)">Manny Rivera(El Tigre)</option>
    <option value="Khabib Nurmagomedov">Khabib Nurmagomedov</option>
  </select><br><br></div>

    <label class="col-sm-2 col-form-label label">ID number</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="EmployeeID" placeholder="What is your ID number?">
    </div>

    <label class="col-sm-2 col-form-label label">Do you have approval?</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="EmployeeApproval" placeholder="Do you have approval?">
    </div>

  
</div>

<button (click)="addTicket()" *ngIf="ticket.TicketID==0" class="btn btn-primary">Add </button>

<button (click)="updateTicket()" *ngIf="ticket.TicketID!=0" class="btn btn-primary">Update </button>
  `,
  styles: [`

  .test{width: 900px;}

  .label{
    color: black;
  }`
  ]
})
export class AddEditTicketComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ticket: any;
  TicketID!: string;
  EmployeeName!: string;
  EmployeeMail!: string;
  EmployeeCell!: string;
  EmployeeStart!: any;
  EmployeeEnd!: any;
  EmployeeAddress!: string;
  EmployeeAbsenceType!: string;
  EmployeeManager!: string ;
  EmployeeID!: string;
  EmployeeApproval!: string ;

  TicketList!:any[];

  loadTicketList(){
    this.service.getAllTickets().subscribe((data:any)=>{
      this.TicketList=data;

      this.TicketID=this.ticket.TicketID;
      this.EmployeeName=this.ticket.EmployeeName;
      this.EmployeeMail=this.ticket.EmployeeMail;
      this.EmployeeCell=this.ticket.EmployeeCell;
      this.EmployeeStart=this.ticket.EmployeeStart;
      this.EmployeeEnd=this.ticket.EmployeeEnd;
      this.EmployeeAddress=this.ticket.EmployeeAddress;
      this.EmployeeAbsenceType=this.ticket.EmployeeAbsenceType;
      this.EmployeeManager=this.ticket.EmployeeManager;
      this.EmployeeID=this.ticket.EmployeeID;
      this.EmployeeApproval=this.ticket.EmployeeApproval;

    });
  }

  ngOnInit(): void {
    this.loadTicketList();
  }

  addTicket(){
    var val ={
          TicketID:this.TicketID, 
          EmployeeName:this.EmployeeName, 
          EmployeeMail:this.EmployeeMail, 
          EmployeeCell:this.EmployeeCell, 
          EmployeeStart:this.EmployeeStart.toString(),
          EmployeeEnd:this.EmployeeEnd.toString(), 
          EmployeeAddress:this.EmployeeAddress, 
          EmployeeAbsenceType:this.EmployeeAbsenceType, 
          EmployeeManager:this.EmployeeManager, 
          EmployeeID:this.EmployeeID, 
          EmployeeApproval:"Pending"};

    this.service.addTicket(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTicket(){
    var val ={TicketID:this.TicketID, 
      EmployeeName:this.EmployeeName, 
      EmployeeMail:this.EmployeeMail, 
      EmployeeCell:this.EmployeeCell, 
      EmployeeStart:this.EmployeeStart.toString(),
      EmployeeEnd:this.EmployeeEnd.toString(), 
      EmployeeAddress:this.EmployeeAddress, 
      EmployeeAbsenceType:this.EmployeeAbsenceType, 
      EmployeeManager:this.EmployeeManager, 
      EmployeeID:this.EmployeeID, 
      EmployeeApproval:this.EmployeeApproval};
      
      this.service.updateTicket(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
