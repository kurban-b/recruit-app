import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/ru'
import { interviewsSelector } from '../../../redux/selectors/inerviews'
import { clientsSelector } from '../../../redux/selectors/clients'

const columns = [
  { field: 'time', headerName: 'Время', width: 120 },
  { field: 'date', headerName: 'Дата', width: 120 },
  { field: 'client', headerName: 'Cоискатель', width: 180 },
  { field: 'stage', headerName: 'Статус', width: 190 }
];

function Interviews () {
  const interviews = useSelector(interviewsSelector);
  const clients = useSelector(clientsSelector)

  const rows = interviews.map(item => {
    return {
      id: item.id,
      time: moment(item.date).locale('ru').format('LT'),
      date: moment(item.date).locale('ru').format('L'),
      client: clients.find(client => client.id === item.clientId).fullName,
      stage: clients.find(client => client.id === item.clientId).stage
    }
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  )
}

export default Interviews;