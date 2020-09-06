/** @jsx jsx */
import { jsx } from "theme-ui"

const CreatorContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "20%",
                height: "auto",
                maxWidth: "screenWidth",
                //backgroundColor: "blue",
                overflow: "hidden",
                borderBottom: "1px solid gray"
            }}

        />
    )
}

export default CreatorContainer