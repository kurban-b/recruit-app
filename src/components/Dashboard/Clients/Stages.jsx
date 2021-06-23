import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Dialog,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { stagesSelector } from "../../../redux/selectors/stages";
import { Save } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { clientsLoadingUpdateSelector } from "../../../redux/selectors/clients";
import { changeStage } from "../../../redux/actions/clients";
import { PropTypes } from 'prop-types'

const useStyes = makeStyles(() => ({
  card: {
    width: "100%",
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    marginBottom: "20px",
    width: "100%",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
  },
  error: {
    marginBottom: "10px",
    width: "100%",
  },
}));

function Stages({ client, id }) {
  const classes = useStyes();

  const dispatch = useDispatch();

  const stages = useSelector(stagesSelector);
  const loadinChanges = useSelector(clientsLoadingUpdateSelector);

  const [values, setValues] = useState({
    modal: false,
    stageId: client.stageId,
    error: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleModalOpen = () => {
    setValues({ ...values, modal: true });
  };

  const handleModalClose = () => {
    setValues({ ...values, modal: false });
  };

  const handleSaveChanges = () => {
    setValues({ ...values, error: false });
    if (values.stageId === undefined) {
      setValues({ ...values, error: true });
      return null;
    }
    dispatch(changeStage(id, values.stageId));
    setValues({...values, modal: false})
  };

  let stage;
  if (client.stage === "Одобрен") {
    stage = "secondary";
  } else if (client.stage === "Собеседование") {
    stage = "primary";
  }

  return (
    <div>
      <Chip
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        size="small"
        label={client.stage}
        color={stage}
        variant="outlined"
        onClick={handleModalOpen}
      />

      <Dialog open={values.modal} onClose={handleModalClose}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" component="h3" className={classes.title}>
              Изменить статус соискателя
            </Typography>

            <FormControl
              variant="outlined"
              className={classes.input}
              size="small"
              required
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Статус
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={values.stageId}
                onChange={handleChange("stageId")}
                label="Статус * "
                displayEmpty={true}
              >
                {stages.map((item, index) => {
                  return (
                    <MenuItem value={item.id} key={index}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {values.error && (
              <Alert severity="warning" className={classes.error}>
                Выберите статус *
              </Alert>
            )}

            <div className="buttons">
              <Button
                variant="contained"
                color="secondary"
                startIcon={
                  loadinChanges ? <CircularProgress size={16} /> : <Save />
                }
                onClick={handleSaveChanges}
                disabled={loadinChanges}
              >
                Сохранить
              </Button>
            </div>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
}

Stages.propTypes = {
  client: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
}

export default Stages;
