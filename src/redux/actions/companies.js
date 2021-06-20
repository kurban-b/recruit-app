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

export const addNewCompany = (company, id) => {
  return dispatch => {
    dispatch({
      type: 'companies/add/start'
    })

    fetch('http://localhost:5000/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: company,
        recruiterId: id
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'companies/add/success',
          payload: json
        })
      })
  }
}

export const deleteCompany = (id) => {
  return dispatch => {
    dispatch({
      type: 'companies/delete/start'
    })

    fetch(`http://localhost:5000/companies/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'companies/delete/success',
          payload: id
        })
      })
  }
}