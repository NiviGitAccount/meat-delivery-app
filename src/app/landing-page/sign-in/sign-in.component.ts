import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  public signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signinForm = this.formBuilder.group({
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  ngOnInit() {
  }

  onSignIn() {
    if (this.signinForm.valid) {
      this.router.navigate(['/home']);
    }
  }

  redirectToSignup() {
    this.resetErrors();
    this.router.navigate(['/sign-up']);
  }

  resetErrors() {
    Object.keys(this.signinForm.controls).forEach(key => {
      this.signinForm.get(key).setErrors(null);
    });
  }

}
