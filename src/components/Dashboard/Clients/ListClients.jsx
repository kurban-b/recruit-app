import React from "react";
import { DataGrid, ruRU } from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import { clientsSelector } from "../../../redux/selectors";
import {
  Avatar,
  Chip,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { MoreVert, Search } from "@material-ui/icons";
import MenuRow from './MenuRow'

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
          <Avatar alt={params.row.FullName} src="/static/images/avatar/1.jpg" style={{backgroundColor: "#6a1be8"}}/>
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
    width: 200,
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
    field: "setting",
    headerName: " ",
    width: 65,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params) => {
      return (
        <MenuRow clientId={params.row.id}/>
      );
    },
  },
];

function ListClients() {
  const classes = useStyes();
  const clients = useSelector(clientsSelector);

  const load = useSelector((state) => state.clients.loading);

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
          };
        });

  return (
    <div
      style={{
        borderRadius: "5px 5px 0 0",
        boxShadow: "0 0 30px -10px rgba(0,0,0,.2)",
      }}
    >
      <TextField
        size="small"
        variant="outlined"
        className={classes.search}
        placeholder="Поиск"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className={classes.searchBtn}>
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          loading={load}
          rows={row}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default ListClients;
