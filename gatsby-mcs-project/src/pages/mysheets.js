/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import SideBarEditor from "../components/sidebar/sidebar-editor-text"



const MySheets = () => (
    <Layout>
        <Body>
            <BodyContent>
                <h1>MySheets</h1>
            </BodyContent>
            <SideBarEditor />
        </Body>
    </Layout>
)

export default MySheets