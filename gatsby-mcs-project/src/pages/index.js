/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"

const IndexPage = () => (
    <Layout>
        <Body>
            <BodyContent>
                <h1>My Cheat Sheets</h1>
            </BodyContent>
        </Body>
    </Layout>
)

export default IndexPage