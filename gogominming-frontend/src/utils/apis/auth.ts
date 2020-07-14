import axios from 'axios';

import { thunk } from '../types'

export const loginThunk: thunk = ({uid, password}) => async dispatch => {
  try {
    const {data: {nickname, post, chat, accessToken}} = await axios.post('http://localhost:8000/api/auth/login', {
      uid, password
    });
    
    localStorage.setItem('loginInfo', JSON.stringify({
      nickname,
    }))
    localStorage.setItem('jwt', accessToken)

    dispatch({
      type: "LOGIN",
      nickname,
      post,
      chat
    })
  }
  catch (error) {
    alert(error.response.data);
  }
}