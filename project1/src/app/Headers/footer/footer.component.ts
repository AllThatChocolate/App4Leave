import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer has-text-centered">
      <h2>Made with love and care by<a href="www.linkedin.com/in/bohlale-steven-nkoana-ba8a3411a"> Bohlale Steven Nkoana </a></h2>
  </footer>
  `,
  styles: [
    `*{
      background-color:transparent;
    }`
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
