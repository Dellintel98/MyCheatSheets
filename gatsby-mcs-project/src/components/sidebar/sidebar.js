/** @jsx jsx */
import { jsx } from "theme-ui"


const SideBar = props => {
    return (
        <div
            {...props}
            sx={{
                width: "300px",
                maxWidth: "280px",
                height: "93%",
                display: "flex",
                position: "fixed",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "backgroundGrey",
                font: "roboto",
                right: 3,
            }}
        />
    )
}

export default SideBar
