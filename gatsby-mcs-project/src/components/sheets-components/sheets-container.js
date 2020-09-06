/** @jsx jsx */
import { jsx } from "theme-ui"

const SheetsContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "50%",
                height: "auto",
                maxWidth: "screenWidth",
                //backgroundColor: "lightred",
                overflow: "hidden",
                borderBottom: "1px solid gray"
            }}
        />
    )
}

export default SheetsContainer