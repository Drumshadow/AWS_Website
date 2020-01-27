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

const aboutMe = (props) =>{

    return (
        <div>
            <Paper style={{ marginTop: "25%", marginLeft: "12%", width: "75vw", height: "40vh" }} id="first">
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <Img style={{ width: 150, height: 150, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3, borderColor: "red"}} alt="Ashton Damrel" src={headShot} />
                    </Grid>
                    <Grid item>
                        <Typography class="text" style={{ fontSize: "25px", marginTop: "5%", marginLeft: "10%", width: "50vw", height: "30vh" }}>
                            I entered college not sure of what I wanted to do but quickly found myself enjoying computer science because of the unlimited
                            amount of problems you can solve with it. Computer science is such and incredible field with limitless possibilities, the only
                            limit is the persons creativity so I aim to equip myself with as many tools as I can that way there is no problem I cannot solve.
                            I enjoy gaming, coding, soccer, and bowling.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};
export default aboutMe;