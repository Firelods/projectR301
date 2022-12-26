import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl(''),
      password: new UntypedFormControl('')
    });
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => {
      if (data === 'User login successfully') {
        this.router.navigate(['/']);
      }
    });
  }
}
