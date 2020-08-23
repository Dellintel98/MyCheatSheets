/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"
import useWindowDimensions from "../hooks/get-screen-width"
import calculateResponsivity from "../hooks/responsive-navigation"

import navLogoImg from "../images/main-logo.png"
import navLogoTitle from "../images/navigation-title.png"

import NavContainer from "./navigation-scripts/nav-container"
import Container from "./container"
import NavLinks from "./navigation-scripts/navigation-links"

import NavigationSearchBar from "./navigation-scripts/navigation-search-bar"
import LogInOutCard from "./navigation-scripts/log-in-out-card"
import HiddenMenu from "./navigation-scripts/hidden-menu"
import { useState } from "react"
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


const NavBar = ({ menuItems, handleLogin, handleLogout, isUserLoggedIn }) => {
    let hiddenMenuVisible = false;
    let windowWidth = useWindowDimensions();
    const { navigationItems, hiddenItems} = calculateResponsivity(windowWidth, menuItems);

    if(windowWidth < 1250) {
        hiddenMenuVisible = true;
    } else {
        hiddenMenuVisible = false;
    }

    const [showLoginModal, setShowLoginModal] = useState(false);
    const handleShow = () => {
        if(!isUserLoggedIn){
            setShowLoginModal(true);
        } else {
            handleLogout()
        }
    }
    const handleCloseModal = () => {
        setShowLoginModal(false);
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
            <NavLinks menuItems={navigationItems} isUserLoggedIn={isUserLoggedIn} />
            <NavigationSearchBar />
            <LogInOutCard onclick={handleShow} isUserLoggedIn={isUserLoggedIn} />
            {showLoginModal && <LoginModal handleClosing={handleCloseModal} handleLogin={handleLogin} />}
            {hiddenMenuVisible && <HiddenMenu menuItems={hiddenItems} isUserLoggedIn={isUserLoggedIn} />}
        </NavContainer>
    )
}


const Navigation = ({ menuItems, handleLogin, handleLogout, isUserLoggedIn }) => {
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
                <NavBar menuItems={menuItems} isUserLoggedIn={isUserLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
            </Container>
        </Header>
    )
}

export default Navigation