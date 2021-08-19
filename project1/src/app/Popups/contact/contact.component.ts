import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
      <div class="container">

        <!-- CONTACT FORM -->
        <form (ngSubmit)="submitForm()" #contactForm="ngForm" action="MAILTO:bohlalenkoana007@gmail.com" method="get" enctype="text/plain">
          <!-- NAME -->
          <div class="field">
            <label class= "label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
              Your name is required, mate
            </div>
          </div>

          <!-- EMAIL-->
          <div class="field">
            <label class= "label">E-mail </label>
            <input type="email" name="email" class="input" [(ngModel)]="email" required email #emailInput="ngModel">
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              Your email is required and needs to be properly formatted
            </div>
          </div>

          <!-- MESSAGE -->
          <div class="field">
            <label class= "label"> Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
          </div><br>

          <!-- SUBMIT BUTTON -->
            <button type="submit" class="button is-large is-warning" [disabled]="contactForm.invalid">Send</button>'
        </form>
      </div>

    
  `,
  styles: [`
  .hero{
    background-image: linear-gradient(#810020, #CA302D) !important;
    background-size: cover;
    background-position: center center;
  }

  .input{
    width: 1100px;
  }

  .button{
    width: 700px;
    background-color:white;
  }

  .textarea{
    height:100px;
  }

  .label{
    color:black;
  }
  `
  ]
})
export class ContactComponent implements OnInit {

  name: any;
  email: any;
  message: any;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    const message = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(message);
  }

}
