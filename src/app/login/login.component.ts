import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, UntypedFormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup
    constructor() {
      this.loginForm = new UntypedFormGroup({
        email: new UntypedFormControl(''),
        password: new UntypedFormControl('')
      });
    }

    ngOnInit(): void {
    }
}
