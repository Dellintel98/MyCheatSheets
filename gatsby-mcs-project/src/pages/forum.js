/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout";
import SideBarForum from "../components/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"

const Forum = () => (
    <Layout>
        <Body>
            <BodyContent>
                <h1>Forum</h1>
            </BodyContent>
            <SideBarForum />
        </Body>
    </Layout>
)

export default Forum