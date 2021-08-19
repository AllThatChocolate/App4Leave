import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  
  <h3 class="title" style="color: black;">
      Welcome to the App4Leave System. With this website, tmployees of a company can book for leave. Then, your HR can either reject or accept your application
    </h3>
    <p class="subtitle">
      So click on one of the links to get started.
    </p>
  `,
  styles: [
    `
  `  
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
