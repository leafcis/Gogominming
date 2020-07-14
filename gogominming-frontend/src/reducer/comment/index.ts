const initialState = {
  comments: []
}

export const comment = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case "MODAL_ADD":
      return {
        comments: action.comments
      }
    default:
      return state
  }
}