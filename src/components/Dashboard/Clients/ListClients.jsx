import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import {
  Avatar, Badge,
  Chip,
  Grid, IconButton,
  makeStyles
} from '@material-ui/core'
import MenuRow from "./MenuRow";
import {
  clientsLoadingSelector,
} from "../../../redux/selectors/clients";
import TableHeader from './TableHeader'
import { notesSelector } from '../../../redux/selectors/notes'
import { Notes } from '@material-ui/icons'
import BadgeNotes from './BadgeNotes'

const useStyes = makeStyles((theme) => ({
  search: {
    margin: "10px 20px",
  },
  searchBtn: {
    color: "#ccc",
  },
}));

const columns = [
  {
    field: "FullName",
    headerName: "Имя",
    width: 240,
    renderCell: (params) => {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt={params.row.FullName}
            src="/static/images/avatar/1.jpg"
            style={{ backgroundColor: "#6a1be8" }}
          />
          <div style={{ marginLeft: "10px" }}>{params.row.FullName}</div>
        </div>
      );
    },
  },
  { field: "company", headerName: "Компания", width: 150 },
  { field: "specialty", headerName: "Профессия", width: 160 },
  {
    field: "stage",
    headerName: "Статус",
    width: 150,
    renderCell: (params) => {
      let stage;
      if (params.row.stage === "Одобрен") {
        stage = "secondary";
      } else if (params.row.stage === "Собеседование") {
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
            label={params.row.stage}
            color={stage}
            variant="outlined"
          />
        </div>
      );
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
        <BadgeNotes notes={params.row.notes} clientId={params.row.id}/>
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
      return <MenuRow clientId={params.row.id} archive={params.row.archive} />;
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
            notes: notes.filter(note => note.clientId === client.id)
          };
        });

  return (
    <div
      style={{
        borderRadius: "5px 5px 0 0",
        boxShadow: "0 0 30px -10px rgba(0,0,0,.2)",
      }}
    >
      <Grid container md={12}>
        <TableHeader selectedClients={selectedClients}/>
        <Grid md={12}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
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
