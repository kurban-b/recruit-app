const initialState = {
  companies: [],
  loading: false
}

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'companies/load/start':
      return {
        ...state,
        loading: true
      }
    case 'companies/load/success':
      return {
        ...state,
        loading: false,
        companies: action.payload
      }
    default :
      return state
  }
}