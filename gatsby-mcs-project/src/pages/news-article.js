/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SideBarNews from "../components/sidebar/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import BodyContentHeader from "../components/body-content/body-content-header"
import NewsImage from "../images/windows.jpg"
import ArticleTextContainer from "../components/news-components/article-text-container"

const NewsArticle = () => (
    <Layout>
        <Body sx={{ overflow: "scrollbar", }}>
            <BodyContent sx={{
                width: "90%",
                height: "100%",
                alignItems: "top",
                mx: "auto",
            }}>
                <BodyContentHeader
                    sx={{
                        marginLeft: "2em",
                        marginTop: "1em",
                        marginBottom: "1em",
                        height: "20%",
                    }}>
                    <h1 sx={{
                        display: "flex", marginLeft: "auto",
                        marginRight: "auto", width: "60%", textAlign: "justify",
                    }}>Microsoft Patch Alert: August 2020</h1>

                </BodyContentHeader>
                <img src={NewsImage} sx={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "60%",
                    height: "50%",
                    marginBottom: "2em",
                }}></img>
                <ArticleTextContainer>Lenovo warns about Win10 version 2004 patch problems, Win8.1 plays catch-up, and we see the 50th reincarnation of an old “blast away the barnacles” Windows upgrade patch.With Windows 10 2004 gradually creeping (I use the term intentionally) onto more machines, faults and foibles are coming out of the woodwork. It looks like a fix for the long-lamented version 2004 defrag bugs is on the way, but we aren’t there yet. Lenovo isn’t too happy with the August version 2004 cumulative update. It’s still too ...</ArticleTextContainer>
            </BodyContent>
            <SideBarNews />
        </Body>
    </Layout>
)

export default NewsArticle