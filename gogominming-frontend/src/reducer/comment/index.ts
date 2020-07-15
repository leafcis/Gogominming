const initialState = {
  title: '',
  comments: []
}

export const comment = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case "MODAL_ADD":
      return {
        title: action.title,
        comments: action.comments
      }
    default:
      return state
  }
}