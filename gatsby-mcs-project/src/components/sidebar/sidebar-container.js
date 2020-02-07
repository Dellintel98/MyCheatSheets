/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "../container"

const SideBarContainer = props => {
    return (
        <Container
            {...props}
            sx={{
                maxWidth: "80%",
                height: "33%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        />
    )
}

export default SideBarContainer