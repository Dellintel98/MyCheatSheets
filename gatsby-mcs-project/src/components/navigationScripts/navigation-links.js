/** @jsx jsx */
import {jsx} from "theme-ui"
import { globalHistory as history } from "@reach/router"
import NavLink from "./navigation-link"

const NavLinks = ({ menuItems }) => {
    const { location } = history;

    return (
        <nav
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            {menuItems.map(({ link, text }) => (
                <NavLink key={text} to={link} isCurrentPage={location.pathname === link} >
                    {text}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavLinks