import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMenu:boolean=true;
  showLogin:boolean;
  has:boolean;
  constructor(router:Router) {

    router.events.forEach((event) => {

       if(event instanceof NavigationStart) {
        
            this.showLogin = event.url !== "/login";
          
            this.has=event.url!=="#";
        
       }

     });

   }


  title = 'shoppingproject';
}
