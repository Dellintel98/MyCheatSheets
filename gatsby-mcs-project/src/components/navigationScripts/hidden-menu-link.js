/** @jsx jsx */
import {jsx} from "theme-ui"
import NavLink from "./navigation-link"

const MenuLink = props => {
    return(
        <NavLink 
            {...props}
            sx={{
                mx: 0,
                paddingLeft: 4,
                paddingRight: 5,
                paddingTop: "3px",
                minWidth: "auto",
                minHeight: "navLinksHeight",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                borderLeft: "3px solid",
                borderLeftColor: "white",
                borderBottom: 0,
                color: "primary",
                '&:hover': {
                    bg: 'backgroundGrey',
                    borderLeftColor: 'primary',
                  }
            }}
        />
    )
}

export default MenuLink