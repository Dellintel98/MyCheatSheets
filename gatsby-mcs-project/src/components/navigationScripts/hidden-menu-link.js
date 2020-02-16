/** @jsx jsx */
import {jsx} from "theme-ui"
import NavLink from "./navigation-link"

const MenuLink = ({isCurrentPage, ...props}) => {
    let borderColor;
    if(isCurrentPage){
        borderColor = "primary";
    } else {
        borderColor = "white";
    }

    return(
        <NavLink 
            {...props}
            isCurrentPage={false}
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
                borderLeftColor: borderColor,
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