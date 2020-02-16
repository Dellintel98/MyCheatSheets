/** @jsx jsx */
import {jsx} from "theme-ui"
import MenuIcon from "./hidden-menu-icon"
import MenuContent from "./hidden-menu-content"

const HiddenMenu = ({menuItems}) => {
    return (
        <div
            sx={{
                cursor: "pointer",
                mx: 0,
                px: 3,
                paddingTop: "3px",
                minWidth: "auto",
                minHeight: "navLinksHeight",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "3px solid white",
                color: "primary",
                ':focus': {
                    //outline: '2px solid',
                },
                '&:hover': {
                    bg: 'backgroundGrey',
                    borderBottomColor: 'backgroundGrey',
                },
                '&:hover nav': {
                    display: "flex",
                },
                '&:hover svg': {
                    color: "alternate",
                }
            }}
        >
            <MenuIcon isVisible={true} />
            <MenuContent menuItems={menuItems} />
        </div>
    )
}

export default HiddenMenu