import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'
import { tokenSelector } from '../../../redux/selectors/auth'
import { addNote } from '../../../redux/actions/notes'

const useStayes = makeStyles(() => ({
  card: {
    padding: "10px",
    width: "600px",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
  },
  input: {
    marginBottom: "30px",
    width: "100%",
  },
  text: {
    padding: "15px",
    fontSize: "16px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "3px",
    fontFamily: "Roboto",
  },
  btnWrap: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
  },
  error: {
    marginBottom: '5px'
  }
}));

function ModalAddNote({ clients, id, modalClose}) {
  const classes = useStayes();

  const dispatch = useDispatch();

  const token = useSelector(tokenSelector)

  const [value, setValue] = useState({
    clientId: '',
    title: '',
    text: '',
    errorClient: false,
    error: false,
  });

  const handleChange = (prop) => (event) => {
    setValue({...value, [prop]:event.target.value});
  };

  const handleChangeTitle = (prop) => (event) => {
    setValue({...value, [prop]: event.target.value})
  }

  const handleChangeText = (prop) => (event) => {
    setValue({...value, [prop]: event.target.value})
  }

  const handleClick = () => {
    setValue({...value, errorClient: false, error: false})
    if (value.title === '' || value.text === '') {
      setValue({...value, error: true})
      return null
    }
    if (id === undefined) {
      if (value.clientId === '' || value.clientId === undefined) {
        setValue({...value, errorClient: true})
        return null
      }
      dispatch(addNote(value.title, value.text, value.clientId, token))
      modalClose(false)
      return null
    }
    dispatch(addNote(value.title, value.text, id, token))
    modalClose(false)

  }



  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3" className={classes.title}>
          Добавить новую заметку
        </Typography>
        {id === undefined && (
          <FormControl
            variant="outlined"
            className={classes.input}
            size="small"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Соискатель
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label='Соискатель'
              value={value.clientId}
              onChange={handleChange('clientId')}
              displayEmpty={true}
            >
              {clients.map((item) => {
                return <MenuItem value={item.id} key={item.id}>{item.fullName}</MenuItem>;
              })}
            </Select>
          </FormControl>
        )}

        <TextField
          label="Заголовок"
          variant="outlined"
          className={classes.input}
          size="small"
          value={value.title}
          onChange={handleChangeTitle('title')}
        />
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Введите текст"
          rowsMin={3}
          className={classes.text}
          value={value.text}
          onChange={handleChangeText('text')}
        />

        {
          value.errorClient &&
          <Alert severity="error" className={classes.error}>
            Выберите соискателя!
          </Alert>
        }

        {
          value.error &&
          <Alert severity="warning" className={classes.error}>
            Заполните все поля!
          </Alert>
        }

        <div className={classes.btnWrap}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<NoteAdd />}
            onClick={handleClick}
          >
            Добавить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ModalAddNote;
