import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestDTO } from '@auth/models/auth.model';
import { CurrentUserService } from '@core/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoggingIn: boolean = false;
  public loginFormSubmitted: boolean = false;
  public error_message: string = '';
  public showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _current: CurrentUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  public checkForKeyEnter(event: KeyboardEvent): void {
    var key = event.key || event.keyCode;
    if (key == 'Enter' || key == 8) {
      this.login();
    }
  }

  public login(): void {
    this.loginFormSubmitted = true;
    if(this.loginForm.valid) {
      const payload: LoginRequestDTO = this.loginForm.value;
      this._current.storeUserCredentials(payload);
      this.router.navigate(['dashboard']);
    } else {
      this.error_message = 'Kindly fill all required field!;'
    }
  }

}
