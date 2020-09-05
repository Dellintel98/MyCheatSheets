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
import NewsImage2 from "../images/google.jpg"
import BodySearchBar from "../components/body-content/body-search-bar"


const sortingOptions = [
    {value: 'sort-by', label: 'Sort by'},
    {value: 'date-oldest', label: 'Date (oldest)'},
    {value: 'date-newest', label: 'Date (newest)'},
    {value: 'views-most', label: 'Most views'},
    {value: 'comments-most', label: 'Most comments'}
]

const News = () => (
    <Layout>
        <Body sx={{ overflowY: "scroll", overflowX: "hidden" }}>
            <BodyContent sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "transparent",
            }}>
                <BodyContentHeader
                    sx={{
                        marginTop: "1em",
                        marginBottom: "1em",
                        height: "20%",
                        width: "80%",
                        justifyContent: "space-between",
                    }}>
                    <h1>News</h1>
                    <BodySearchBar sortingOptions={sortingOptions} />
                </BodyContentHeader>

                <NewsContainer>
                    <NewsImageCard>
                        <NewsIcon iconSrc={NewsImage} />
                    </NewsImageCard>
                    <NewsTextCard>
                        <h2 sx={{ marginTop: "0.2em", marginBottom: "0.5em", }}>
                            (Microsoft Patch Alert:August 2020)
                        </h2>
                        Lenovo warns about Win10 version 2004 patch problems, Win8.1 plays catch-up, and we see the 50th reincarnation of an old “blast away the barnacles” Windows upgrade patch.With Windows 10 2004 gradually creeping (I use the term intentionally) onto more machines, faults and foibles are coming out of the woodwork. It looks like a fix for the long-lamented version 2004 defrag bugs is on the way, but we aren’t there yet. Lenovo isn’t too happy with the August version 2004 cumulative update. It’s still too ...
                    </NewsTextCard>
                </NewsContainer>
                <NewsContainer>
                    <NewsImageCard>
                        <NewsIcon iconSrc={NewsImage2} />
                    </NewsImageCard>
                    <NewsTextCard>
                        <h2 sx={{ marginTop: "0.2em", marginBottom: "0.5em", }}>
                            (30 Epic Google Docs Tips and Features You Need to Be Using)
                        </h2>
                        If you regularly use Google Docs to create content for your website, then you’re probably well aware of how useful this free tool is. However, there are a ton of shortcuts, apps, and built-in features that you might not be using. By reading through and applying the hacks highlighted in this post, you’re going to …
                    </NewsTextCard>
                </NewsContainer>
            </BodyContent>
            <SideBarNews />
        </Body>
    </Layout>
)

export default News