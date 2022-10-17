import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../actions/user.action';
import { currentUser } from '../selectors';
import { LoginCredential } from '../login-form/login-form.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor (private authSvc: AuthenticationService, private store: Store) {}

  ngOnInit(): void {
  }

  loginUser(param: LoginCredential) {
    this.authSvc.login(param)
      .subscribe((response) => {
        const sessionKey = response.id;
        const sessionData = JSON.stringify(response);

        sessionStorage.setItem(sessionKey, sessionData);

        const user = {
          id: sessionKey,
          name: response.userId
        };

        console.log({ user });

        this.store.dispatch(login({ user }));
      })
  }
}
