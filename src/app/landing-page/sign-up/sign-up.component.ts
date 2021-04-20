import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmValidParentMatcher, CustomValidators } from '../libs/validators/customValidators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signupForm: FormGroup;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.setFormValidators();
  }

  setFormValidators() {
    // this.signupForm = null;


    this.signupForm = this.formBuilder.group({
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ]))
    }, { validator: CustomValidators.childrenEqual });
  }

  redirectToSignin() {
    this.resetErrors();
    this.router.navigate(['/'])
  }

  resetErrors() {
    Object.keys(this.signupForm.controls).forEach(key => {
      this.signupForm.get(key).setErrors(null);
    });
  }

}