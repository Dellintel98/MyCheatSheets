/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SideBarNews from "../components/sidebar/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import BodyContentHeader from "../components/body-content/body-content-header"

const News = () => (
    <Layout>
        <Body sx={{ overflow: "scrollbar", }}>
            <BodyContent sx={{
                width: "90%",
                height: "100%",
                alignItems: "top",
                mx: "auto",
            }}>
                <BodyContentHeader>
                    <h2>News</h2>
                </BodyContentHeader>
            </BodyContent>
            <SideBarNews />
        </Body>
    </Layout>
)

export default News