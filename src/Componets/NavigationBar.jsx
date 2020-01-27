import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import Grid from "@material-ui/core/Grid";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";


const Navbar = (props) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <>
            <NavBar style={barAnimation}>
                <FlexContainer>
                    <Grid container direction="row" justify="flex-start" alignItems="center" >
                        <Brand />
                        <Typography variant="h2" class="text" style={{
                            color: "white",
                            textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000"
                        }}>
                            Ashton Damrel
                        </Typography>
                        <IconButton size="small" style={{ color: "#0077b5" }} href="https://www.linkedin.com/in/ashton-damrel/" target="_blank">
                            <LinkedInIcon size="small"/>
                        </IconButton>
                        <IconButton size="small" style={{ color: "black" }} href="https://github.com/Drumshadow" target="_blank">
                            <GitHubIcon size="small"/>
                        </IconButton>
                    </Grid>
                    <Grid>
                    <NavLinks style={linkAnimation}>
                        <a style={{right: "0"}} href="/">About</a>
                        <a style={{right: "0"}} href="/">Work Experience</a>
                        <a style={{right: "0"}} href="/">Education</a>
                        <a style={{right: "0"}} href="/">Projects</a>
                        <a style={{right: "0"}} href="/">Contact</a>
                    </NavLinks>
                    </Grid>
                    <BurgerWrapper>
                        <BurgerMenu
                            navbarState={props.navbarState}
                            handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
            />
        </>
    )
};

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  margin-top: 2vh;
  width: 45vw;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;