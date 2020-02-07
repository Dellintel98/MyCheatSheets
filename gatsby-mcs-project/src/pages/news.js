/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SideBar from "../components/sidebar/sidebar"
import Body from "../components/body"
import BodyContent from "../components/body-content"

const News = () => ( 
    <Layout>
        <Body>
            <BodyContent>
                <h1>News</h1>
            </BodyContent>
            <SideBar />
        </Body>
    </Layout>
)

export default News