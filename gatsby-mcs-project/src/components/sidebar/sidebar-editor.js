/** @jsx jsx */
import { jsx } from "theme-ui"
import SideBar from "../sidebar/sidebar"
import Card from "../sidebar/sidebar-card"
import SideBarContainer from "../sidebar/sidebar-container"

const SideBarEditor = props => {
    return (
        <div
            {...props}
            sx={{
                height: "100%",
                display: "flex",
            }}
        >
            <SideBar>

            </SideBar>

        </div>

    )
}

export default SideBarEditor