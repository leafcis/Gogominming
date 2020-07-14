import axios from 'axios';

import { thunk } from '../types'

export const getMyCommentPostThunk: thunk = ({jwt, _id}) => async dispatch => {
  try {
    console.log(_id)
    const {data: {result}} = await axios.get(`http://localhost:8000/api/comment/mycomment/${_id}`, {
      headers: {
        Authorization: jwt
      }
    });
    console.log(result)

  }
  catch (error) {

  }
}

export const commentPostThunk: thunk = ({jwt, _id, comment}) => async dispatch => {
  try {
    await axios.post('http://localhost:8000/api/comment/create', {
      _id,
      comment,
    }, {
      headers: {
        Authorization: jwt
      }
    })

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