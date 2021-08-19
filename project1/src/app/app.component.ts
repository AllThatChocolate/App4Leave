import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  template: `
  <!-- IT IS IMPORTANT TO NOTE THAT THE APP USES AN IMPORTED CSS LIBRARY CALLED "bulma". SEE: "./node_modules/bulma" TO INSPECT THE LIBRARY -->
  <!-- THE REFERENCE FOR THE BULMA CLASS CAN BE FOUND AT LINE 55 IN THE "angular.json" FILE -->
  <!-- AUTHOR: BOHLALE NKOANA -->

    <!-- Routes get injected here-->
    <router-outlet></router-outlet>

  `,
  styles: [],

})
export class AppComponent {
  title = 'Application For Leave';

 // constructor (public authenticationService:AuthenticationService){}
}
