/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SideBarNews from "../components/sidebar/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"

const News = () => ( 
    <Layout>
        <Body>
            <BodyContent>
                <h1>News</h1>
            </BodyContent>
            <SideBarNews />
        </Body>
    </Layout>
)

export default News