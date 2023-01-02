import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user: User;
  constructor(private loginService: LoginService, private router: Router) {
    this.user = this.loginService.getUser();
  }
  disconnect() {
    this.loginService.disconnect();
    this.router.navigate(['/']);
  }
}
