/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"
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

const LogoLink = ({windowWidth}) => {
    const isLogoTitleVisible = (windowWidth > 700) ? true : false;

    return (
        <Link 
            to="/" 
            sx={{ 
                display: "flex",
                alignItems: "center",
                userSelect: "none", /* supported by Chrome and Opera */
                webkitUserSelect: "none", /* Safari */
                khtmlUserSelect: "none", /* Konqueror HTML */
                mozUserSelect: "none", /* Firefox */
                msUserSelect: "none", /* Internet Explorer/Edge */
            }}
        >
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
            {isLogoTitleVisible &&
            <img
                src={navLogoTitle}
                alt="My Cheat Sheet logo"
                sx={{
                    height: "navTitle",
                    maxHeight: "38px",
                    width: "auto",
                    px: 1,
                }}
            />}
        </Link>
    )
}


const NavBar = ({ windowWidth, menuItems, handleLogin, handleLogout, isUserLoggedIn }) => {
    const hiddenMenuVisible = (windowWidth < 1250) ? true : false;
    const { navigationItems, hiddenItems} = calculateResponsivity(windowWidth, menuItems);

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
            <NavigationSearchBar windowWidth={windowWidth} />
            <LogInOutCard onclick={handleShow} isUserLoggedIn={isUserLoggedIn} />
            {showLoginModal && <LoginModal handleClosing={handleCloseModal} handleLogin={handleLogin} windowWidth={windowWidth} />}
            {hiddenMenuVisible && <HiddenMenu menuItems={hiddenItems} isUserLoggedIn={isUserLoggedIn} />}
        </NavContainer>
    )
}


const Navigation = ({ menuItems, handleLogin, handleLogout, isUserLoggedIn, windowWidth }) => {    
    return (
        <Header
            sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)',
                zIndex: 1,
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
                <LogoLink windowWidth={windowWidth} />
                <NavBar windowWidth={windowWidth} menuItems={menuItems} isUserLoggedIn={isUserLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
            </Container>
        </Header>
    )
}

export default Navigation