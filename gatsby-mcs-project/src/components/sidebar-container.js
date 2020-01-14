/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./container"

const SideBarContainer = props => {
    return (
        <Container
            {...props}
            sx={{
                maxWidth: "100px",
                backgroundColor: "pink"
            }}
        />
    )
}

export default SideBarContainer