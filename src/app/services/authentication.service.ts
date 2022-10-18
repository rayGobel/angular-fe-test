import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCredential } from '../login-form/login-form.component';
import { environment } from '../../environments/environment';

interface RegistrationCredential {
}

interface UserSession {
  id: string;
  userId: string;
  validUntil: Date;
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(param: LoginCredential) {
    const baseApi = environment.baseApi;
    const url = `${baseApi}/auth/email-login`;

    return this.http.post<UserSession>(url, param);
  }

  register(param: RegistrationCredential) {
    const baseApi = environment.baseApi;
    const url = `${baseApi}/auth/email-login`;

    return this.http.post<UserSession>(url, param);
  }
}
