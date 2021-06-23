import React from 'react'
import { useSelector } from 'react-redux'
import 'moment/locale/ru'
import {
  interviewsloadingAddSelector,
  interviewsLoadingSelector,
  interviewsSelector
} from '../../../redux/selectors/inerviews'
import { clientsSelector } from '../../../redux/selectors/clients'
import InterviewsTable from './InterviewsTable'
import HeaderInterviews from './Header-Interviews'


function Interviews () {
  const interviews = useSelector(interviewsSelector).sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  const clients = useSelector(clientsSelector)

  return (
    <div>
      <HeaderInterviews />
      <InterviewsTable interviews={interviews} clients={clients}/>
    </div>
  )
}

export default Interviews;