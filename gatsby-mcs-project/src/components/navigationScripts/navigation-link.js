/** @jsx jsx */
import {jsx} from "theme-ui"
import { Link } from "gatsby"

const NavLink = ({isCurrentPage, ...props}) => {
    let borderColor;
    if(isCurrentPage){
        borderColor = "primary";
    } else {
        borderColor = "white";
    }

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
                borderBottomColor: borderColor,
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