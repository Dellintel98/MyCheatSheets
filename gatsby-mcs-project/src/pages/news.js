/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SideBarNews from "../components/sidebar/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import BodyContentHeader from "../components/body-content/body-content-header"
import NewsContainer from "../components/news-components/news-container"
import NewsImageCard from "../components/news-components/news-image-card"
import NewsTextCard from "../components/news-components/news-text-card"
import NewsIcon from "../components/news-components/news-icon"
import NewsImage from "../images/windows.jpg"

const News = () => (
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
                    <h1>News</h1>
                </BodyContentHeader>

                <NewsContainer>
                    <NewsImageCard><NewsIcon iconSrc={NewsImage} /></NewsImageCard>
                    <NewsTextCard>Microsoft Patch Alert:
                        August 2020 Lenovo warns about Win10 version 2004 patch problems, Win8.1 plays catch-up, and we see the 50th reincarnation of an old “blast away the barnacles” Windows upgrade patch.With Windows 10 2004 gradually creeping (I use the term intentionally) onto more machines, faults and foibles are coming out of the woodwork. It looks like a fix for the long-lamented version 2004 defrag bugs is on the way, but we aren’t there yet. Lenovo isn’t too happy with the August version 2004 cumulative update. It’s still too ...</NewsTextCard>
                </NewsContainer>
            </BodyContent>
            <SideBarNews />
        </Body>
    </Layout>
)

export default News