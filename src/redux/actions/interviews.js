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