import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../reducers/index';
import * as actions from './../../store/auth.actions';
import { Observable } from 'rxjs';
import { getError } from '../../store/auth.selectors';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  error$: Observable<string | null>;

  constructor(private store: Store<AppState>, private titleService: Title) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.error$ = this.store
      .pipe(
        select(getError),
        map( (error: any) => {
          if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
            return 'Incorrect email or password';
          } else {
            return null;
          }
        })
      );
      this.titleService.setTitle("Login");
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onLogin() {
    if (this.loginForm.valid) {
      this.store.dispatch(new actions.LoginRequested(this.loginForm.value));
    }
  }

  onGoogleLogin(authProvider: string) {
    this.store.dispatch(new actions.SocialLogin({ authProvider }));
  }
  onTwitterLogin(authProvider: string) {
    this.store.dispatch(new actions.SocialLogin({ authProvider }));
  }

}
