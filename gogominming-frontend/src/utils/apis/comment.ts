import axios from 'axios';

import { thunk } from '../types'

export const doVoteCommentThunk: thunk = ({jwt, _id, agree}) => async dispatch => {
  try {
    const {data: {result}} = await axios.post('http://localhost:8000/api/comment/vote', {
      _id, agree
    }, {
      headers: {
        Authorization: jwt
      }
    })

    const {data: {result:res}} = await axios.get('http://localhost:8000/api/post/load', {
      headers: {
        Authorization: jwt
      }
    });

    dispatch({
      type: "GET",
      post: [...res]
    })

    alert(result)
  }
  catch (error) {
    console.log(error)
  } 
}

export const getMyCommentPostThunk: thunk = ({jwt, _id, title}) => async dispatch => {
  try {
    const {data: {result}} = await axios.get(`http://localhost:8000/api/comment/mycomment/${_id}`, {
      headers: {
        Authorization: jwt
      }
    });
    dispatch({
      type: "SELECT",
      modal: "comment"
    })
    dispatch({
      type: "MODAL_ADD",
      comments: result,
      title: title
    })
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