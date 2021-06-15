import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AvatarOfAccount from "../../Account/AvatarOfAccount";
import ProfileInfo from './ProfileInfo'

const useStyes = makeStyles((theme) => ({
  avatarCard: {
    width: "90%",
  },
  info: {
    padding: "20px",
  },
}));

function Profile({ clients }) {
  const classes = useStyes();

  const id = useParams().id_;

  console.log(Number(id))


  const client = clients.find((item) => item.id === Number(id));
  console.log(client)

  return (
    <div>
      <Grid container>
        <Grid md={12}>
          <Typography variant="h5" component="h2">
            Аккаунт
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.avatarCard}>
            <CardContent>
              <AvatarOfAccount client={client} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card className={classes.info}>
            <CardContent>
              {client !== undefined && <ProfileInfo client={client} />}

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
