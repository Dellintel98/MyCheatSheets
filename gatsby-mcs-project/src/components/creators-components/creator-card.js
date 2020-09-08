/** @jsx jsx */
import { jsx } from "theme-ui"

const CreatorCard = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "auto",
                py: 2,
                my: 2,
                maxWidth: "screenWidth",
                // backgroundColor: "seagreen",
            }}
        />
    )
}

export default CreatorCard