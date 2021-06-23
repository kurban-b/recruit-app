import React, { useState } from 'react'
import { Button, Card, CardContent, makeStyles, TextField, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab'
import { recruterSelector } from '../../redux/selectors/auth'
import { addNewCompany } from '../../redux/actions/companies'
import { PropTypes } from 'prop-types'

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
  },
  error: {
    margin: '20px 0'
  }
}))

function ModalAddCompany ({modalClose}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const recruiter = useSelector(recruterSelector)

  const [value, setValue] = useState({
    company: '',
    error: false
  })

  const handleChangeCompany = (prop) => (event) => {
    setValue({...value, [prop]:event.target.value})
  }

  const handleAddCompany = () => {
    setValue({...value, error: false})
    if (value.company === '') {
      setValue({...value, error: true})
      return null
    }
    dispatch(addNewCompany(value.company, recruiter.id))
    modalClose(false)
  }

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
            value={value.company}
            onChange={handleChangeCompany('company')}
          />
          {
            value.error &&
            <Alert severity="warning" className={classes.error}>
              Заполните поле наименования компании!
            </Alert>
          }
          <div className={classes.buttonWrap}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<Add />}
              onClick={handleAddCompany}
            >
              Добавить
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

ModalAddCompany.propTypes = {
  modalClose: PropTypes.func.isRequired
}

export default ModalAddCompany