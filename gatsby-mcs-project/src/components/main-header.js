/** @jsx jsx */
import { jsx } from "theme-ui"

const ForumHeader = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "lawngreen",
                backgroundColor: "transparent",
                width: "90%",
                height: "20%",
                maxHeight: "20%",
            }}
        />
    )
}

export default ForumHeader