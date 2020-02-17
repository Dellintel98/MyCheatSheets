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
import LogInModal from "./login-modalbox/login-modalbox"
import HiddenMenu from "./navigationScripts/hidden-menu"
import { useState, useEffect } from "react"
import LoginModal from "./login-modalbox/login-modalbox"

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

/* function handleLogInClick(setCount, counter) {
    setCount(counter + 1);
    console.log("Do you want to log in?", counter);
} */

const NavBar = ({ menuItems }) => {
    const [count, setCount] = useState(0);
    let hiddenMenuVisible = false;
    let windowWidth = useWindowDimensions();
    const { navigationItems, hiddenItems} = calculateResponsivity(windowWidth, menuItems);

    if(windowWidth < 1250) {
        hiddenMenuVisible = true;
    } else {
        hiddenMenuVisible = false;
    }

    return (
        <NavContainer
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "auto",
            }}
        >
            <NavLinks menuItems={navigationItems} />
            <NavigationSearchBar />
            <LogInOutCard onClick={() => setCount(count + 1)}/>
            <LoginModal />
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
                    position: "relative",
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