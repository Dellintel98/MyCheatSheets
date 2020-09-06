/** @jsx jsx */
import { jsx } from "theme-ui"

const MySheetContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                //justifyContent: "space-between",
                alignItems: "left",
                width: "90%",
                height: "70%",
                maxWidth: "screenWidth",
                //backgroundColor: "lightblue",

            }}
        />
    )
}

export default MySheetContainer