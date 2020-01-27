import React, { Component } from 'react'
import Navbar from "./Componets/NavigationBar";

import GlobalStyle from "./style/Global";
import abtMe from "./Componets/aboutMe"
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Img from "react-image";
import headShot from "./assets/ProfilePhoto.jpg";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {IOptions as classes} from "glob";

class App extends Component {
    state = {
        navbarOpen: false
    };

    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    };

    render() {
        return (
            <>
                <Navbar
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                />
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
                <GlobalStyle/>
            </>
        )
    }
}

export default App