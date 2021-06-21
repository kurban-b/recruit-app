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

export const addNewClient = (id, fullName, email, phone, address, specialty, companyId) => {
  return dispatch => {
    dispatch({
      type: "clients/add/start"
    })

    fetch('http://localhost:5000/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recruiterId: id,
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        specialty: specialty,
        companyId: companyId
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "clients/add/success",
          payload: json
        })
      })
  }
}

export const deleteClient = (id) => {
  return dispatch => {
    dispatch({
      type: "clients/delete/start"
    })

    fetch(`http://localhost:5000/clients/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "clients/delete/success",
          payload: id
        })
      })
  }
}

export const toggleArchive = (id, archive) => {
  return dispatch => {
    dispatch({
      type: "clients/archiving/start"
    })

    fetch(`http://localhost:5000/clients/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        archive: !archive,
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "clients/archiving/success",
          payload: json,
          id: id
        })
      })
  }
}

export const saveChangesClient = (id, fullName, email, phone, address, specialty, companyId, recruiterId) => {
  return dispatch => {
    dispatch({
      type: 'clients/update/start'
    })

    fetch(`http://localhost:5000/clients/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        specialty: specialty,
        companyId: companyId,
        recruiterId: recruiterId
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "clients/update/success",
          payload: json,
          id: id
        })
      })
  }
}

export const changeStage = (id, stageId) => {
  return dispatch => {
    dispatch({
      type: 'clients/update-stage/start'
    })

    fetch(`http://localhost:5000/clients/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        stageId: stageId,
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: "clients/update-stage/success",
          payload: json,
          id: id
        })
      })

  }
}