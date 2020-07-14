import axios from 'axios';

import { thunk } from '../types'

export const uploadPost: thunk = ({jwt, title, content}) =>  async dispatch => {
  try {
    dispatch({
      type: "OFF_MODAL"
    })
    await axios.post('http://localhost:8000/api/post/create', {
      title,
      post: content,
    }, {
      headers: {
        Authorization: jwt
      }
    })
  }
  catch (error) {
    alert(error)
    localStorage.removeItem('jwt')
    dispatch({
      type: "LOGOUT"
    })
  }
}

export const mypageThunk: thunk = ({jwt}) => async dispatch => {
  try {
    const {data: {result}} = await axios.get('http://localhost:8000/api/post/mypage', {
      headers: {
        Authorization: jwt
      }
    });

    dispatch({
      type: "MYPAGE",
      post: [...result.post],
      chat: []
    })
  }
  catch (error) {
    localStorage.removeItem('jwt')

    dispatch({
      type: "LOGOUT"
    })
    
    alert(error);
  }
}

export const postThunk: thunk = ({jwt}) => async dispatch => {
  try {
    const {data: {result}} = await axios.get('http://localhost:8000/api/post/load', {
      headers: {
        Authorization: jwt
      }
    });

    dispatch({
      type: "GET",
      post: [...result]
    })
  }
  catch (error) {
    console.dir(error);

    localStorage.removeItem('jwt')

    dispatch({
      type: "LOGOUT"
    })
    
    alert(error);
  }
}