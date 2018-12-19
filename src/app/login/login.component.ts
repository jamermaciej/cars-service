import { AuthService } from '../cars/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  userEmail: string;
  userVer: boolean;

  constructor(private formBuilder: FormBuilder,
              public authService: AuthService,
              private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signup() {
    this.authService.signup(this.loginForm.get('email').value, this.loginForm.get('password').value);
    this.loginForm.reset();
  }
  login() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    // this.router.navigate(['/cars']);
  }
  resetPassword() {
    this.authService.resetPassword(this.loginForm.get('email').value);
  }
}
