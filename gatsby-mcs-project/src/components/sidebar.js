/** @jsx jsx */
import { jsx } from "theme-ui"


const SideBar = props => {
    return (
        <div
            {...props}
            sx={{
                width: "400px",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f2f2",
            }}
        >

        </div>
    )
}

export default SideBar