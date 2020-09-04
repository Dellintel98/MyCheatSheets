/** @jsx jsx */
import {jsx} from "theme-ui"
import { globalHistory as history } from "@reach/router"
import NavLink from "./navigation-link"

const NavLinks = ({ menuItems, isUserLoggedIn }) => {
    const { location } = history;

    return (
        <nav
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                userSelect: "none", /* supported by Chrome and Opera */
                webkitUserSelect: "none", /* Safari */
                khtmlUserSelect: "none", /* Konqueror HTML */
                mozUserSelect: "none", /* Firefox */
                msUserSelect: "none", /* Internet Explorer/Edge */
            }}
        >
            {menuItems.map(({ link, text }) => (
                (!isUserLoggedIn && text === "My sheets") ? null :
                <NavLink key={text} to={link} isCurrentPage={location.pathname === link} >
                    {text}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavLinks