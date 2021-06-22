import React from 'react'
import { IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { deleteInterview } from '../../../redux/actions/interviews'

function DeleteInterview ({id}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteInterview(id))
  }

  return (
    <div>
      <IconButton onClick={handleDelete} size={'small'}>
        <Delete />
      </IconButton>
    </div>
  )
}

export default DeleteInterview