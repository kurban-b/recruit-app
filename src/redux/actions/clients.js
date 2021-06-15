export const loadingClients = (token) => {
  return dispatch => {
    dispatch({
      type: "clients/load/start"
    })

    fetch('http://localhost:5000/clients', {
      method: 'GET',
      headers: {
        "token": token
      }
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "clients/load/success",
          payload: json
        })
      })
  }
}