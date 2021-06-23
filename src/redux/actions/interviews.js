export const loadingInterviews = (token) => {
  return (dispatch) => {
    dispatch({
      type: "interviews/load/start",
    });

    fetch("http://localhost:5000/interviews", {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "interviews/load/success",
          payload: json,
        });
      });
  };
};

export const addInterview = (id, clientId, date) => {
  return (dispatch) => {
    dispatch({
      type: "interviews/add/start",
    });

    fetch("http://localhost:5000/interviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        recruiterId: id,
        clientId: clientId,
        date: date,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "interviews/add/success",
          payload: json,
        });
      });
  };
};

export const deleteInterview = (id) => {
  return (dispatch) => {
    dispatch({
      type: "interviews/delete/start",
    });

    fetch(`http://localhost:5000/interviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "interviews/delete/success",
          payload: id
        });
      });
  };
};
