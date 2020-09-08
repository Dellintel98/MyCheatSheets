/** @jsx jsx */
import { jsx } from "theme-ui"

const SheetsCardContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",
                minHeight: "70%",
                maxWidth: "screenWidth",
                // backgroundColor: "teal",
                py: 3,
                marginBottom: 2,
            }}
        />
    )
}

export default SheetsCardContainer