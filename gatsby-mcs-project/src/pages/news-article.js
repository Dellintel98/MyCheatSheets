/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "top",
                backgroundColor: "transparent",
            }}>
                <BodyContentHeader
                    sx={{
                        width: "60%",
                        marginTop: "1em",
                        marginBottom: "1em",
                        height: "20%",
                        justifyContent: "left",
                    }}>
                    <Styled.h1
                        sx={{
                            display: "flex",
                            justifySelf: "center",
                            textAlign: "left",
                        }}
                    >
                        Microsoft Patch Alert: August 2020
                    </Styled.h1>
                </BodyContentHeader>
                <img src={NewsImage} sx={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "60%",
                    maxWidth: "60%",
                    height: "auto",
                    maxHeight: "50%",
                    marginBottom: "2em",
                }}></img>
                <ArticleTextContainer>
                    Lenovo warns about Win10 version 2004 patch problems, Win8.1 plays catch-up, and we see the 50th reincarnation of an old “blast away the barnacles” Windows upgrade patch.With Windows 10 2004 gradually creeping (I use the term intentionally) onto more machines, faults and foibles are coming out of the woodwork. It looks like a fix for the long-lamented version 2004 defrag bugs is on the way, but we aren’t there yet. Lenovo isn’t too happy with the August version 2004 cumulative update. It’s still too ...
                </ArticleTextContainer>
            </BodyContent>
            <SideBarNews />
        </Body>
    </Layout>
)

export default NewsArticle