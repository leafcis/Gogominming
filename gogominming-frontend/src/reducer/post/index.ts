const initialState = {
  post: [],
}

export const post = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case "GET":
      return {
        post: action.post,
      }
    case "DEL":
      return {
        post: [],
      }
    default:
      return state
  }
}