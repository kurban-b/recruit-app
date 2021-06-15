const initialState = {
  clients: [],
  loading: false
}

export const clients = (state = initialState, action) => {
  switch (action.type) {
    case "clients/load/start":
      return {
        ...state,
        loading: true
      }
    case "clients/load/success":
      return {
        ...state,
        loading: false,
        clients: action.payload
      }
    default:
      return state;
  }
}