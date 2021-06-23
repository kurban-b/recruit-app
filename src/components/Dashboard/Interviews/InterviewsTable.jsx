import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import InterviewsTableHeader from "./InterviewsTableHeader";
import { useSelector } from "react-redux";
import {
  interviewsloadingAddSelector,
  interviewsLoadingSelector,
} from "../../../redux/selectors/inerviews";
import Stages from "../Clients/Stages";
import AvatarForRow from "../Clients/AvatarForRow";
import DeleteInterview from "./Delete-Interview";
import { PropTypes } from 'prop-types'

const columns = [
  {
    field: "time",
    headerName: "Время",
    width: 80,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: "date",
    headerName: "Дата",
    width: 100,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: "fullName",
    headerName: "Cоискатель",
    width: 250,
    renderCell: (params) => {
      return <AvatarForRow client={params.row} key={params.row.id} />;
    },
  },
  {
    field: "stage",
    headerName: "Статус",
    width: 150,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return (
        <Stages
          client={params.row}
          id={params.row.client && params.row.client.id}
          key={params.row.id}
        />
      );
    },
  },
  {
    field: "email",
    headerName: "Эл. почта",
    width: 280,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: "delete",
    headerName: " ",
    width: 50,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return <DeleteInterview id={params.row.id} />;
    },
  },
];

function InterviewsTable({ interviews, clients }) {
  const loadingAdd = useSelector(interviewsloadingAddSelector);
  const loading = useSelector(interviewsLoadingSelector);

  const rows = interviews.map((item, index) => {
    return {
      id: item.id,
      time: moment(item.date).locale("ru").format("LT"),
      date: moment(item.date).locale("ru").format("L"),
      FullName:
        clients.find((client) => client.id === item.clientId) !== undefined
          ? clients.find((client) => client.id === item.clientId).fullName
          : null,
      stage:
        clients.find((client) => client.id === item.clientId) !== undefined
          ? clients.find((client) => client.id === item.clientId).stage
          : null,
      client:
        clients.find((client) => client.id === item.clientId) !== undefined
          ? clients.find((client) => client.id === item.clientId)
          : null,
      email:
        clients.find((client) => client.id === item.clientId) !== undefined
          ? clients.find((client) => client.id === item.clientId).email
          : null,
    };
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <InterviewsTableHeader />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        loading={loading && loadingAdd}
        disableSelectionOnClick={true}
      />
    </div>
  );
}

InterviewsTable.propTypes = {
  clients: PropTypes.array.isRequired,
  interviews: PropTypes.array.isRequired
}

export default InterviewsTable;
