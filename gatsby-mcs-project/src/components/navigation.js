/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"
import useWindowDimensions from "../hooks/get-screen-width"
import calculateResponsivity from "../hooks/responsive-navigation"

import navLogoImg from "../images/main-logo.png"
import navLogoTitle from "../images/navigation-title.png"

import NavContainer from "./navigationScripts/nav-container"
import Container from "./container"
import NavLinks from "./navigationScripts/navigation-links"

import NavigationSearchBar from "./navigationScripts/navigation-search-bar"
import LogInOutCard from "./navigationScripts/log-in-out-card"
import HiddenMenu from "./navigationScripts/hidden-menu"
import { useState } from "react"

const LogoLink = () => {
    return (
        <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
            <img
                src={navLogoImg}
                alt="My Cheat Sheet logo"
                sx={{
                    height: "navLogo",
                    maxHeight: "40px",
                    width: "auto",
                    px: 1,
                }}
            />
            <img
                src={navLogoTitle}
                alt="My Cheat Sheet logo"
                sx={{
                    height: "navTitle",
                    maxHeight: "38px",
                    width: "auto",
                    px: 1,
                }}
            />
        </Link>
    )
}

const NavBar = ({ menuItems }) => {
    //const [counter, setCount] = useState(0);
    let hiddenMenuVisible = false;
    let windowWidth = useWindowDimensions();
    const { navigationItems, hiddenItems} = calculateResponsivity(windowWidth, menuItems);

    if(windowWidth < 1250) {
        hiddenMenuVisible = true;
    } else {
        hiddenMenuVisible = false;
    }

    function handleLogInClick() {
        //setCount(counter + 1);
        console.log("Do you want to log in?");
    }

    return (
        <NavContainer
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "auto",
            }}
        >
            <NavLinks menuItems={navigationItems} />
            <NavigationSearchBar />
            <LogInOutCard onClick={handleLogInClick()} />
            {hiddenMenuVisible && <HiddenMenu menuItems={hiddenItems} />}
        </NavContainer>
    )
}


const Navigation = ({ menuItems }) => {
    return (
        <Header
            sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)',
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    backgroundColor: "background",
                }}
            >
                <LogoLink />
                <NavBar menuItems={menuItems} />
            </Container>
        </Header>
    )
}

export default Navigation