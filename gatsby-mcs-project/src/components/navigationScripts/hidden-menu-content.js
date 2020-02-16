/** @jsx jsx */
import {jsx} from "theme-ui"
import { globalHistory as history } from "@reach/router"
import MenuLink from "./hidden-menu-link"

const MenuContent = ({menuItems}) => {
    const { location } = history;

    return(
        <nav
            sx={{
                position: "absolute",
                minWidth: "200px",
                maxWidth: "250px",
                height: "auto",
                marginLeft: "-65px",
                marginTop: "145px",
                display: "none",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "background",
                boxShadow: '-1px 1px 3px rgba(0, 0, 0, 0.25)',
                zIndex: 1,
            }}
        >
            {menuItems.map(({ link, text }) => (
                <MenuLink key={text} to={link} isCurrentPage={location.pathname === link} >
                    {text}
                </MenuLink>
            ))}
        </nav>
    )
}

export default MenuContent