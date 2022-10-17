import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../actions/user.action';
import { currentUser } from '../selectors';
import { LoginCredential } from '../login-form/login-form.component';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor (private authSvc: AuthenticationService, private store: Store, private router: Router) {}

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

        this.store.dispatch(login({ user }));
      })
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
