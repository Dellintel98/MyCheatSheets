/** @jsx jsx */
import {jsx} from "theme-ui"
import { Link } from "gatsby"

const NavLink = props => {
    return (
        <Link
            {...props}
            sx={{
                mx: 1,
                px: 2,
                paddingTop: "3px",
                minWidth: "auto",
                minHeight: "navLinksHeight",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "3px solid",
                borderBottomColor: "white",
                color: "primary",
                '&:hover': {
                    bg: 'backgroundGrey',
                    borderBottomColor: 'primary',
                  }
            }}
        />
    )
}

export default NavLink