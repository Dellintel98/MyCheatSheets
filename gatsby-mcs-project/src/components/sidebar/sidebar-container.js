/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "../container"

const SideBarContainer = props => {
    return (
        <Container
            {...props}
            sx={{
                width: "98%",
                height: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-between",
            }}
        />
    )
}

export default SideBarContainer