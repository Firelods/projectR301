import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user: User;
  constructor(private loginService: LoginService) {
    this.user = this.loginService.getUser();
  }

}
