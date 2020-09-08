/** @jsx jsx */
import { jsx } from "theme-ui"

const ForumHeaderContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "lightgray",
                backgroundColor: "transparent",
                width: "90%",
                height: "100%",
            }}
        />
    )
}

export default ForumHeaderContainer