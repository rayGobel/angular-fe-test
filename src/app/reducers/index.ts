import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { User, login, logout } from '../actions/user.action';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const initialState = {
  user: {
    id: 'test',
    name: '',
  }
};

export const userReducers = createReducer(
  initialState,
  on(login, (state, props) => {
    console.log({ state, props });
    return { user: props.user };
  }),
  on(logout, (state) => {
    return { user: initialState.user }
  })
);
