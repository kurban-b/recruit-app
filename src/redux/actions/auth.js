export const startLogin = (login, password, checkbox) => {
  return dispatch => {
    dispatch({
      type: "auth/login/start"
    })

    fetch('http://localhost:5000/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: login,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.login === undefined) {
          dispatch({
            type: 'auth/login/error'
          })
        } else {
          dispatch({
            type: 'auth/login/success',
            payload: json,
            checkbox: checkbox
          })
        }

      })
      .catch(() => {
        dispatch({
          type: 'auth/login/error'
        })
      })
  }
}

export const registrationStart = (firstName, lastName, email, login, password) => {
  return dispatch => {
    dispatch({
      type: "auth/registration/start"
    })

    fetch('http://localhost:5000/recruiters', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        login: login,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "auth/registartion/success",
          payload: json
        })
      })
  }
}