/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"

import navLogoImg from "../images/main-logo.png"
import navLogoTitle from "../images/navigation-title.png"

import NavContainer from "./navigationScripts/nav-container"
import Container from "./container"
import NavLinks from "./navigationScripts/navigation-links"
//import SearchBar from "./search-bar"
import NavigationSearchBar from "./navigationScripts/navigation-search-bar"
import LogInOutCard from "./navigationScripts/log-in-out-card"
import HiddenMenu from "./navigationScripts/hidden-menu"

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
    return (
        <NavContainer
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "auto",
            }}
        >
            <NavLinks menuItems={menuItems} />
            <NavigationSearchBar />
            <LogInOutCard />
            <HiddenMenu menuItems={menuItems} />
        </NavContainer>
    )
}


const Navigation = ({ menuItems }) => {
    console.debug(`current url:`);

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