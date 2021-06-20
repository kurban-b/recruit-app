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

export const addNote = (title, text, clientId, token) => {
  return dispatch => {
    dispatch({
      type: 'notes/add/start'
    })

    fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: token
      },
      body: JSON.stringify({
        title: title,
        content: text,
        clientId: clientId
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'notes/add/success',
          payload: json
        })
      })
  }
}

export const deleteNote = (id) => {
  return dispatch => {

    dispatch({
      type: 'notes/delete/start'
    })

    fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'notes/delete/success',
          payload: id
        })
      })
  }
}