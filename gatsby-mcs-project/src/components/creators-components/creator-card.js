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
                maxWidth: "screenWidth",
                //backgroundColor: "red",
            }}
        />
    )
}

export default CreatorCard