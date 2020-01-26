import React, { Component } from 'react'
import Navbar from "./Componets/NavigationBar";

import GlobalStyle from "./style/Global";
import abtMe from "./Componets/aboutMe"


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
                <abtMe/>/*This wont render for some reason*/
                <GlobalStyle />
            </>
        )
    }
}

export default App