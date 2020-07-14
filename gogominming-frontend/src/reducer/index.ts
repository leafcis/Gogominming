import { combineReducers } from 'redux';

import { auth } from './auth';
import { post } from './post';
import { modal } from './modal';

const rootReducer = combineReducers({
  auth,
  modal,
  post
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;