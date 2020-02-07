/** @jsx jsx */
import { jsx } from "theme-ui"


const SideBar = props => {
    return (
        <div
            {...props}
            sx={{
                width: "350px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "backgroundGrey",
            }}
        />
    )
}

export default SideBar
