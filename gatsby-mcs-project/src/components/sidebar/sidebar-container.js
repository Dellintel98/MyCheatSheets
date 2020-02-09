/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "../container"

const SideBarContainer = props => {
    return (
        <Container
            {...props}
            sx={{
                //backgroundColor: "tomato",
                width: "100%",
                height: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "top",
                paddingBottom: 3,
            }}
        />
    )
}

export default SideBarContainer