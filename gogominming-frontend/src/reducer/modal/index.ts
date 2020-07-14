const initialState = {
  currModal: ''
}

export const modal = (state: typeof initialState = initialState, action: any) => {
  switch (action.type) {
    case "SELECT":
      return {
        currModal: action.modal,
      }
    case "OFF_MODAL":
      return {
        currModal: ''
      }
    default:
      return state
  }
}