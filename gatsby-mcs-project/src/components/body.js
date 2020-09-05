/** @jsx jsx */
import { jsx } from "theme-ui"

const Body = props => {
    return (
        <div
            {...props}
            sx={{
                width: "100vw",
                height: "93%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
            }}
        />
    )
}

export default Body
