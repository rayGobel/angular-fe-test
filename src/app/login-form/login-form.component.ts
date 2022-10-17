import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface LoginCredential {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor() { }

  @Output() loginSubmitEvent = new EventEmitter<LoginCredential>()

  onLogin(f: NgForm) {
    const loginPair = {
      email: f.value.email,
      password: f.value.password
    };

    this.loginSubmitEvent.emit(loginPair);
  }

}
