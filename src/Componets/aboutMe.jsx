import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import headShot from "../assets/ProfilePhoto.jpg";
import Img from "react-image";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper style={{ marginTop: "25%", marginLeft: "12%", width: "75vw", height: "75vh" }} id="first">
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <Img style={{ height: "38vh", width: "20vw", marginLeft: "10%", marginTop: "7%" }}
                             alt="Ashton Damrel" src={headShot} />
                    </Grid>
                    <Grid item>
                        <Typography class="text" style={{ fontSize: "25px", marginTop: "5%", marginLeft: "10%", width: "50vw", height: "30vh" }}>

                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}