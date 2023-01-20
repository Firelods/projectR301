import { Product } from 'src/app/interfaces/product';
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
  missingProducts: Product[] = [];

  constructor(private loginService: LoginService, private router: Router) {
    this.user = this.loginService.getUser();
    this.loginService.getMissingProduct().subscribe((data: Product[]) => {
      this.missingProducts = data;
      console.log(data);
    });

  }
  disconnect() {
    this.loginService.disconnect();
    this.router.navigate(['/']);
  }
}
