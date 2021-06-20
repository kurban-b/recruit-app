import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent, Chip,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import AvatarOfAccount from "../../Account/AvatarOfAccount";
import ProfileInfo from './ProfileInfo'
import { useSelector } from 'react-redux'
import { stagesSelector } from '../../../redux/selectors/stages'

const useStyes = makeStyles((theme) => ({
  avatarCard: {
    width: "90%",
  },
  info: {
    padding: "20px",
  },
  chipBox: {
    display: 'flex',
    justifyContent: "flex-end",
    width: '100%'
  }
}));

function Profile({ clients }) {
  const classes = useStyes();

  const id = useParams().id_;

  const client = clients.find((item) => item.id === Number(id));

  const stage = useSelector(stagesSelector).find(item => item.id === client.stageId)

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
              <div className={classes.chipBox}>
                <Chip
                  style={{
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                  size="small"
                  label={stage.name}
                  color={'primary'}
                  variant="default"
                />
              </div>
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
