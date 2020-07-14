import { RootState } from '../../reducer';
import { ThunkAction } from 'redux-thunk';

export type thunk = (params: any) => ThunkAction<void, RootState, null, any>;