/** @jsx jsx */
import {jsx} from "theme-ui"
import { globalHistory as history } from "@reach/router"
import MenuLink from "./hidden-menu-link"

const MenuContent = ({menuItems, isUserLoggedIn}) => {
    const { location } = history;
    let topMargin = "0px";
    const numberOfItems = menuItems.length;

    if(numberOfItems === 1) {
        topMargin = `${43}px`;
    } else if(numberOfItems === 2) {
        topMargin = `${63}px`;
    } else if(numberOfItems === 3) {
        topMargin = `${83}px`;
    }else if(numberOfItems === 4) {
        topMargin = `${104}px`;
    }else if(numberOfItems === 5) {
        topMargin = `${124}px`;
    } else if(numberOfItems === 6) {
        topMargin = `${145}px`;
    }

    return(
        <nav
            sx={{
                position: "absolute",
                minWidth: "200px",
                maxWidth: "250px",
                height: "auto",
                marginLeft: "-65px",
                marginTop: topMargin,
                display: "none",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "background",
                boxShadow: '-1px 1px 3px rgba(0, 0, 0, 0.25)',
                zIndex: 2,
            }}
        >
            {menuItems.map(({ link, text }) => (
                (!isUserLoggedIn && text === "My sheets") ? null :
                <MenuLink key={text} to={link} isCurrentPage={location.pathname === link} >
                    {text}
                </MenuLink>
            ))}
        </nav>
    )
}

export default MenuContent