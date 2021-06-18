const initialState = {
  notes: [],
  companies: [],
  interviews: [],
  stages: [],
  loading: false
}

export const application = (state = initialState, action) => {
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
    case 'stages/load/start':
      return {
        ...state,
        loading: true
      }
    case 'stages/load/success':
      return {
        ...state,
        loading: false,
        stages: action.payload
      }
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

    case 'notes/load/start':
      return {
        ...state,
        loading: true
      }
    case 'notes/load/success':
      return {
        ...state,
        loading: false,
        notes: action.payload
      }

    default:
      return state;
  }
}

