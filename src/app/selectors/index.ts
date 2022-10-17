import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../actions/user.action';

export const currentUser = createFeatureSelector<User>('user');
