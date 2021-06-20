const initialState = {
  interviews: [],
  loading: false
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
    default :
      return state
  }
}