import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../interfaces/purchase';
import { AccountingService } from '../service/accounting.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent {
  profit: number = 0;
  listPurchases: Purchase[] = [];

  constructor(private accountingService: AccountingService, private router: Router, private loginService: LoginService) {
    this.accountingService.getPurchases().subscribe((data: Purchase[]) => {
      this.listPurchases = data;
    });

    this.accountingService.getProfit().subscribe((data: number) => {
      this.profit = data;
    });
  }

}
