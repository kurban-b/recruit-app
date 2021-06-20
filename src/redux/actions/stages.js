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