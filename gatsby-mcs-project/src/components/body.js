/** @jsx jsx */
import { jsx } from "theme-ui"

const Body = props => {
    return (
        <div
            {...props}
            sx={{
                position: "relative",
                width: "100vw",
                height: "94%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                backgroundColor: "white"
            }}
        />
    )
}

export default Body
