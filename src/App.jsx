import React, { Component } from 'react'
import Navbar from "./Componets/NavigationBar";

import GlobalStyle from "./style/Global";
import abtMe from "./Componets/aboutMe"
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Img from "react-image";
import headShot from "./assets/ProfilePhoto.jpg";
import Typography from "@material-ui/core/Typography";

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
                <div style={{ width: '100%' }}>
                    <Paper style={{ marginTop: "25%", marginLeft: "12%", width: "75vw", height: "40vh" }} id="first">
                        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item>
                                <Img style={{ width: 150, height: 150, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3, borderColor: "red"}} alt="Ashton Damrel" src={headShot} />
                            </Grid>
                            <Grid item>
                                <Typography class="text" style={{ fontSize: "25px", marginTop: "5%", marginLeft: "10%", width: "50vw", height: "30vh" }}>
                                    I entered college not sure of what I wanted to do, but I quickly discovered my passion for computer science.
                                    Computer science is an incredible field with infinite possibilities, the only true
                                    limit is a persons creativity. In light of these infinite possibilities I aim to equip myself with as many tools as I can that way there is no problem I cannot solve.
                                    Some other things I am passionate about and enjoy are gaming, coding, soccer, and bowling.
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