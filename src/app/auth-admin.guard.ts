import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(public loginService: LoginService, public router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isUserAdmin()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
