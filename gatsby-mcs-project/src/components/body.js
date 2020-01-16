/** @jsx jsx */
import { jsx } from "theme-ui"

const Body = props => {
    return (
        <div
            {...props}
            sx={{
                width: "100vw",
                height: "1080px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "orange",
                justifyContent: "space-between",
            }}
        />
    )
}

export default Body
