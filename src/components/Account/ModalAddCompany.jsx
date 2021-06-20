import React from 'react'
import { Button, Card, CardContent, IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import { Add, Save } from '@material-ui/icons'

const useStyles = makeStyles(()=>({
  title: {
    margin: "10px 10px 30px 10px"
  },
  buttonWrap: {
    margin: '20px 0',
    display: 'flex',
    justifyContent: "center"
  },
  input: {
    width: "100%"
  }
}))

function ModalAddCompany (props) {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h3" className={classes.title}>
            Добавить новую компанию
          </Typography>
          <TextField
            id="outlined-basic"
            label="Наименование"
            variant="outlined"
            className={classes.input}
          />
          <div className={classes.buttonWrap}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<Add />}
            >
              Добавить
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ModalAddCompany