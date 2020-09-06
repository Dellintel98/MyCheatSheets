/** @jsx jsx */
import { jsx } from "theme-ui"

const SeeThroughContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "80%",
                height: "80%",
                maxWidth: "screenWidth",
                backgroundColor: "rgba(255,255,255, 0.4)",
                borderRadius: "5px",
            }}
        />
    )
}

export default SeeThroughContainer