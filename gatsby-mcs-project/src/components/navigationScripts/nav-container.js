/** @jsx jsx */
import {jsx} from "theme-ui"
import Container from "../container"

const NavContainer = props => {
    return(
        <Container
            {...props}
            sx={{
                maxWidth: "navContainerWidth",
                maxHeight: "navContainerHeight",
                margin: "0",
            }}
        />
    )
}

export default NavContainer