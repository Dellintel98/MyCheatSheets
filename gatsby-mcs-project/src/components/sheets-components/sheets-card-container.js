/** @jsx jsx */
import { jsx } from "theme-ui"

const SheetsCardContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "left",
                width: "100%",
                height: "auto",
                maxWidth: "screenWidth",
                //backgroundColor: "pink",
                overflow: "hidden",
            }}
        />
    )
}

export default SheetsCardContainer