const initialState = {
  clients: [],
  loading: false
}

export const clientsReducer = (state = initialState, action) => {
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
    case "clients/add/start":
      return {
        ...state,
        loading: true
      }
    case "clients/add/success":
      return {
        ...state,
        loading: false,
        clients: [action.payload, ...state.clients]
      }
    case "clients/delete/start":
      return {
        ...state,
        loading: true
      }
    case "clients/delete/success":
      return {
        ...state,
        loading: false,
        clients: state.clients.filter(client => client.id !== action.payload)
      }
    case "clients/archiving/start":
      return {
        ...state,
        loading: true
      }
    case "clients/archiving/success":
      return {
        ...state,
        loading: false,
        clients: state.clients.map(client => {
          if (client.id === action.id) {
            return action.payload
          }
          return client
        })
      }
    default:
      return state;
  }
}