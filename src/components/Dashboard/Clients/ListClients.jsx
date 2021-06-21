import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import {
  Grid,
  makeStyles
} from '@material-ui/core'
import MenuRow from "./MenuRow";
import {
  clientsLoadingSelector,
} from "../../../redux/selectors/clients";
import TableHeader from './TableHeader'
import { notesSelector } from '../../../redux/selectors/notes'
import BadgeNotes from './BadgeNotes'
import Stages from './Stages'
import AvatarForRow from './AvatarForRow'

const useStyes = makeStyles((theme) => ({
  search: {
    margin: "10px 20px",
  },
  searchBtn: {
    color: "#ccc",
  },
  grid: {
    border: 'none'
  }
}));

const columns = [
  {
    field: "FullName",
    headerName: "Имя",
    width: 240,
    renderCell: (params) => {
      return <AvatarForRow client={params.row} key={params.row.id}/>
    },
  },
  { field: "company", headerName: "Компания", width: 150 },
  { field: "specialty", headerName: "Профессия", width: 160 },
  {
    field: "stage",
    headerName: "Статус",
    width: 150,
    renderCell: (params) => {
      return <Stages client={params.row} key={params.row.id}/>
    },
  },
  {
    field: "notes",
    headerName: "Заметки",
    width: 90,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return (
        <BadgeNotes notes={params.row.notes} clientId={params.row.id} key={params.row.id}/>
      )
    },
  },
  {
    field: "setting",
    headerName: " ",
    width: 60,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return <MenuRow clientId={params.row.id} archive={params.row.archive} key={params.row.id}/>;
    },
  },
];

function ListClients({ clients }) {
  const classes = useStyes();

  const notes = useSelector(notesSelector)

  const [selectedClients, setSelectedClients] = useState([]);

  const load = useSelector(clientsLoadingSelector);

  const row =
    clients === undefined
      ? []
      : clients.map((client) => {
          return {
            id: client.id,
            FullName: client.fullName,
            company: client.company,
            specialty: client.specialty,
            stage: client.stage,
            archive: client.archive,
            notes: notes.filter(note => note.clientId === client.id),
            stageId: client.stageId
          };
        });

  return (
    <div
      style={{
        borderRadius: "5px 5px 0 0",
        boxShadow: "0 0 30px -10px rgba(0,0,0,.2)",
      }}
    >
      <Grid container>
        <TableHeader selectedClients={selectedClients}/>
        <Grid item md={12}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              className={classes.grid}
              loading={load}
              rows={row}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
              onSelectionModelChange={(params) =>
                setSelectedClients(params.selectionModel)
              }
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ListClients;
