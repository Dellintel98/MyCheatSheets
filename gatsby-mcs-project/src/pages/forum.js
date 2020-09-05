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
import MultipleQuestionContainer from "../components/forum-scripts/multiple-question-container"
import QuestionContainer from "../components/forum-scripts/question-container"
import Question from "../components/forum-scripts/question"
import KeywordLabelsContainer from "../components/forum-scripts/keyword-labels-container"
import KeywordLabel from "../components/forum-scripts/keyword-label"


const sortingOptions = [
    {value: 'sort-by', label: 'Sort by'},
    {value: 'date-newest', label: 'Date (newest)'},
    {value: 'date-oldest', label: 'Date (oldest)'},
    {value: 'recent-activity', label: 'Recent activity'},
    {value: 'most-votes', label: 'Most votes'},
    {value: 'most-answers', label: 'Most answers'}
]

const filterOptions = [
    {value: 'keyword', label: 'Keyword'}, // nadodati input||drop za upisati te keyworde
    {value: 'no-accepted-answer', label: 'No accepted answer'},
    {value: 'no-answers', label: 'No answers'}
]

const Forum = () => (
    <Layout>
        <Body sx={{ overflowY: "scroll", overflowX: "hidden" }} >
            <BodyContent
                sx={{
                    height: "98%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    // backgroundColor: "transparent",
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
                <MultipleQuestionContainer>
                    <QuestionContainer topMargin="0em" >
                        <Question />
                        <KeywordLabelsContainer>
                            <KeywordLabel />
                            <KeywordLabel />
                            <KeywordLabel />
                            {/* ... */}
                        </KeywordLabelsContainer>
                    </QuestionContainer>
                    <QuestionContainer>
                        <Question />
                        <KeywordLabelsContainer>
                            <KeywordLabel />
                            {/* ... */}
                        </KeywordLabelsContainer>
                    </QuestionContainer>
                    <QuestionContainer>
                        <Question />
                        <KeywordLabelsContainer>
                            <KeywordLabel />
                            <KeywordLabel />
                            {/* ... */}
                        </KeywordLabelsContainer>
                    </QuestionContainer>
                </MultipleQuestionContainer>
            </BodyContent>
            <SideBarForum />
        </Body>
    </Layout>
)

export default Forum