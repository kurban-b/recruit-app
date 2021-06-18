export const loadingCompanies = (token) => {
  return dispatch => {
    dispatch({
      type: 'companies/load/start'
    })

    fetch('http://localhost:5000/companies', {
      method: 'GET',
      headers: {
        "token": token
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "companies/load/success",
          payload: json
        })
      })
  }
}

export const loadingStages = () => {
  return dispatch => {
    dispatch({
      type: 'stages/load/start'
    })

    fetch('http://localhost:5000/stages')
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "stages/load/success",
          payload: json
        })
      })
  }
}

export const loadingInterviews = (token) => {
  return dispatch => {
    dispatch({
      type: 'interviews/load/start'
    })

    fetch('http://localhost:5000/interviews', {
      method: 'GET',
      headers: {
        "token": token
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "interviews/load/success",
          payload: json
        })
      })
  }
}

export const loadingNotes = (token) => {
  return dispatch => {
    dispatch({
      type: "notes/load/start",
    })

    fetch('http://localhost:5000/notes', {
      method: 'GET',
        headers: {
        "token": token
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'notes/load/success',
          payload: json
        })
      })
  }
}