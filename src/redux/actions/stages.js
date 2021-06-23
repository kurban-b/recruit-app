export const loadingStages = () => {
  return (dispatch) => {
    dispatch({
      type: "stages/load/start",
    });

    fetch("/stages")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "stages/load/success",
          payload: json,
        });
      });
  };
};
