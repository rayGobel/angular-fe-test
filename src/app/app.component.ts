import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from './actions/user.action';
import { currentUser } from './selectors';
import { LoginCredential } from './login-form/login-form.component';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private authSvc: AuthenticationService, private store: Store) {}

  title = 'manulife-fe-test';

  isLoggedIn$ = this.store.select(currentUser);

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
