const initialState = {
  interviews: [],
  loading: false,
  loadingAdd: false
}

export const interviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'interviews/load/start':
      return {
        ...state,
        loading: true
      }
    case 'interviews/load/success':
      return {
        ...state,
        loading: false,
        interviews: action.payload
      }
    case 'interviews/add/start':
      return {
        ...state,
        loadingAdd: true
      }
    case 'interviews/add/success':
      return {
        ...state,
        loadingAdd: false,
        interviews: [...state.interviews, action.payload]
      }
    case 'interviews/delete/start':
      return {
        ...state,
        loading: true
      }
    case 'interviews/delete/success':
      return {
        ...state,
        loading: false,
        interviews: state.interviews.filter(item => item.id !== action.payload)
      }
    default :
      return state
  }
}