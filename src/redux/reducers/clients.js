const initialState = {
  clients: [],
  loading: false,
  loadingUpdate: false
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
    case "clients/update/start":
      return {
        ...state,
        loadingUpdate: true
      }
    case "clients/update/success":
      return {
        ...state,
        loadingUpdate: false,
        clients: state.clients.map(client => {
          if (client.id === action.id) {
            return action.payload
          }
          return client
        })
      }
    case "clients/update-stage/start":
      return {
        ...state,
        loadingUpdate: true
      }
    case "clients/update-stage/success":
      return {
        ...state,
        loadingUpdate: false,
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