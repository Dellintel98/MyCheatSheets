/** @jsx jsx */
import { jsx } from "theme-ui"

const Body = props => {
    return (
        <div
            {...props}
            sx={{
                width: "100vw",
                height: "92%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        />
    )
}

export default Body
