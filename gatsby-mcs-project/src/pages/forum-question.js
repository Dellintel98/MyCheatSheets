/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout";
import SideBarForum from "../components/sidebar/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import BodyContentHeader from "../components/body-content/body-content-header"
import BodySearchBar from "../components/body-content/body-search-bar"
import ForumHeader from "../components/forum-scripts/forum-header"
import HeaderContainer from "../components/forum-scripts/forum-header-container"
import ForumLabelCard from "../components/forum-scripts/forum-label-card"
import NewQuestionButton from "../components/forum-scripts/new-question-button"


const sortingOptions = [
    {value: 'sort-by', label: 'Sort by'},
    {value: 'date-newest', label: 'Date (newest)'},
    {value: 'date-oldest', label: 'Date (oldest)'},
    {value: 'recent-activity', label: 'Recent activity'},
    {value: 'most-votes', label: 'Most votes'},
    {value: 'most-answers', label: 'Most answers'}
]

const ForumQuestion = () => (
    <Layout>
        <Body sx={{ overflowY: "scroll", overflowX: "hidden" }} >
            <BodyContent
                sx={{
                    height: "98%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundColor: "transparent",
                }}
            >
                <ForumHeader>
                    <BodyContentHeader
                        sx={{
                            height: "70%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Styled.h2>Forum</Styled.h2>
                        <HeaderContainer>
                            <BodySearchBar sortingOptions={sortingOptions} />
                            <NewQuestionButton />
                        </HeaderContainer>
                    </BodyContentHeader>
                    {/* <BodyDivisionLine /> */}
                    <ForumLabelCard />
                    {/* <TotalAskedQuestionsLabel /> */}
                </ForumHeader>
                
            </BodyContent>
            <SideBarForum />
        </Body>
    </Layout>
)

export default ForumQuestion