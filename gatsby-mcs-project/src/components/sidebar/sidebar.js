/** @jsx jsx */
import { jsx } from "theme-ui"


const SideBar = props => {
    return (
        <div
            {...props}
            sx={{
                width: "300px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#f2f2f2",

            }}
        >

        </div>
    )
}

export default SideBar
