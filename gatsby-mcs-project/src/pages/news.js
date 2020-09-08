/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import LinesEllipsis from "react-lines-ellipsis"
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"
import Layout from "../components/layout"
import SideBarNews from "../components/sidebar/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import MainHeader from "../components/main-header"
import BodyContentHeader from "../components/body-content/body-content-header"
import NewsContainer from "../components/news-components/news-container"
import NewsImageCard from "../components/news-components/news-image-card"
import NewsTextCard from "../components/news-components/news-text-card"
import NewsIcon from "../components/news-components/news-icon"
import NewsImage from "../images/windows.jpg"
import NewsImage2 from "../images/google.jpg"
import BodySearchBar from "../components/body-content/body-search-bar"
import NewsData from "../page-data/news-data"


const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
const pStyled = Styled.p;

const sortingOptions = [
    {value: 'sort-by', label: 'Sort by'},
    {value: 'date-oldest', label: 'Date (oldest)'},
    {value: 'date-newest', label: 'Date (newest)'},
    {value: 'views-most', label: 'Most views'},
]


const News = () => (
    <Layout>
        <Body sx={{ overflowY: "scroll", }}>
            <BodyContent sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                //backgroundColor: "lightgreen",
            }}>
                <MainHeader>
                    <BodyContentHeader
                        sx={{
                            height: "70%",
                            justifyContent: "left",
                            borderBottom: "1px solid",
                            borderColor: "iconGrey",
                            // backgroundColor: "transparent",
                        }}>
                        <h1>News</h1>
                        <BodySearchBar sortingOptions={sortingOptions} />
                    </BodyContentHeader>
                </MainHeader>
                {NewsData.map((article) => (
                    <NewsContainer key={article.newsId}>
                        <NewsImageCard>
                            <NewsIcon iconSrc={article.newsImagePath} />
                        </NewsImageCard>
                        <NewsTextCard>
                            <Styled.h3 sx={{ marginTop: "1rem", marginBottom: "2rem" }}>
                                {article.title}
                            </Styled.h3>
                            <ResponsiveEllipsis 
                                text={article.newsText}
                                maxLine="3"
                                ellipsis="..."
                                trimRight
                                basedOn="letters"
                                component={pStyled}
                            />
                        </NewsTextCard>
                    </NewsContainer>
                ))}
            </BodyContent>
            <SideBarNews />
        </Body>
    </Layout>
)

export default News