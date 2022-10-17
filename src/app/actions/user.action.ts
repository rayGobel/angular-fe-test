import { createAction, props } from '@ngrx/store';

export interface User {
  id: string;
  name: string;
};

export interface UserCredentials {
  email: string;
  password: string;
}

export const login = createAction('[User] Login', props<{ user: User }>());
export const logout = createAction('[User] Logout');
