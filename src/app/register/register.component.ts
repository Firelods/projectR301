import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private registerService: RegisterService, private router: Router) {
    this.registerForm = new UntypedFormGroup({
      email: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
      firstName: new UntypedFormControl(''),
      surname: new UntypedFormControl('')
    });
  }


  submit() {
    console.log(this.registerForm.value);
    this.registerService.register(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.firstName, this.registerForm.value.lastName).subscribe((data) => {
      if (data === 'User registered successfully') {
        this.router.navigate(['/']);
      }
    }
    );
  }
}
