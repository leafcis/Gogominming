const initialState = {
  nickname: '',
  mypost: [],
  mychat: []
}

export const auth = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        nickname: action.nickname,
        mypost: action.post,
        mychat: action.chat
      }
    case "LOGOUT":
      return {
        nickname: '',
        mypost: [],
        mychat: []
      }
    default:
      return state
  }
}