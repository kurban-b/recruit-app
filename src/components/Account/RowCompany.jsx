import React from 'react'
import { Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { deleteCompany } from '../../redux/actions/companies'
import { useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'

function RowCompany ({company}) {
  const dispatch = useDispatch();

  const handleDelete = (id) => () => {
    dispatch(deleteCompany(id));
  };

  return (
    <>
      <ListItem>
        <ListItemText
          primary={company.name}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete(company.id)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
    </>
  )
}

RowCompany.propTypes = {
  company: PropTypes.object.isRequired
}

export default RowCompany