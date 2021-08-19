import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminabout',
  template: `
  
  <h3 class="title" style="color: black;">
      Welcome to  the offical App4Leave manager page. On this page, you can either accept or reject the leave applications that your employees log
    </h3>
    <p class="subtitle">
    So click on one of the above links to get started.
    </p>

  `,
  styles: [
    `
  `  
  ]
})
export class AdminaboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
