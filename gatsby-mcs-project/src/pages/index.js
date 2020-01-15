/** @jsx jsx */
import {jsx} from "theme-ui"
import Layout from "../components/layout"
import SideBar from "../components/sidebar"

const IndexPage = () => ( 
    <Layout>
        <div
            sx={{
                width: "100vw",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "orange",
                justifyContent: "space-between",
            }}
        >
            <div
                sx={{
                    backgroundColor: "slateblue",
                    width: "100%"
                }}
            >
                <h1>My Cheat Sheets</h1>
            </div>
            <SideBar />
        </div>
    </Layout>
)

export default IndexPage