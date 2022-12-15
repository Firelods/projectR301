import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectR301';
  loggedIn = false;
  constructor(public loginService: LoginService) {
    this.loggedIn = this.loginService.isLoggedIn();
    console.log(this.loggedIn);
  }

}
