import { combineReducers } from 'redux';

import { auth } from './auth';
import { post } from './post';
import { modal } from './modal';
import { comment } from './comment';

const rootReducer = combineReducers({
  auth,
  modal,
  post,
  comment
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;