/** @jsx jsx */
import { jsx } from "theme-ui"

const SheetsContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                width: "65%",
                height: "auto",
                maxWidth: "screenWidth",
                // backgroundColor: "seagreen",
                borderBottom: "1px solid gray",
                marginBottom: "60px",
                paddingBottom: "10px",
            }}
        />
    )
}

export default SheetsContainer