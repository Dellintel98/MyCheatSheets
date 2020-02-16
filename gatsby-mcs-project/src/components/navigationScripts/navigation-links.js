/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import NavLink from "./navigation-link"

const NavLinks = ({ menuItems }) => {
    return (
        <nav
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            {menuItems.map(({ link, text }) => (
                <NavLink key={text} to={link}>
                    {text}
                </NavLink>
            ))}
        </nav>
    )
}

export default NavLinks