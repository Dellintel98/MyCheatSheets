/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import MainHeader from "../components/main-header"
import SideBarEditorPdf from "../components/sidebar/sidebar-editor-pdf"
import SideBarEditorText from "../components/sidebar/sidebar-editor-text"
import SideBarEditorImage from "../components/sidebar/sidebar-editor-image"
// import SideBarEditor from "../components/sidebar/sidebar-editor-pdf"

function CheckEditorType(editorType) {
    if (editorType === "pdf") {
        return (
            <SideBarEditorPdf />
        )
    }
    else if (editorType === "text") {
        return (
            <SideBarEditorText />
        )
    }
    else if (editorType === "image") {
        return (
            <SideBarEditorImage />
        )
    }
}

const Sheet = () => (
    <Layout>
        <Body>
            <BodyContent>
                <h1>Sheet</h1>
            </BodyContent>
            {CheckEditorType("image")}
        </Body>
    </Layout>
)

export default Sheet