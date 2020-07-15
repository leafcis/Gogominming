import axios from 'axios'

export const createChat = async ({jwt, _id, title}: {
  jwt: string,
  _id: string,
  title: string
}) => {
  try {
    const {data: {result}} = await axios.post('http://localhost:8000/api/chat/create', {
      _id,
      title
    }, {
      headers: {
        Authorization: jwt
      }
    });
    console.log(result)
    return result;
  }
  catch (error) {
    alert(error.response.data);
  }
}

export const joinChat = async ({jwt, _id} : {
  jwt: string,
  _id: string
}) => {
  try {
    const {data: {result}} = await axios.get(`http://localhost:8000/api/chat/join/${_id}`, {
      headers: {
        Authorization: jwt
      }
    })
    console.log(result)
    return result;
  }
  catch (error) {
    alert(error)
  }
}