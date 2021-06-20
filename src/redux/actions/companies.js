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