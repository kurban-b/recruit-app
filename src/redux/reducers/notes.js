const initialState = {
  notes: [],
  loading: false
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case 'notes/add/start':
      return {
        ...state,
        loading: true
      }
    case 'notes/add/success':
      return {
        ...state,
        loading: false,
        notes: [action.payload, ...state.notes]
      }
    case 'notes/delete/start':
      return {
        ...state,
        loading: true
      }
    case 'notes/delete/success':
      return {
        ...state,
        loading: false,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    default :
      return state
  }
}