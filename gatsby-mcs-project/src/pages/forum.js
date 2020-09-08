/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout";
import SideBarForum from "../components/sidebar/sidebar-forum"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import BodyContentHeader from "../components/body-content/body-content-header"
import BodySearchBar from "../components/body-content/body-search-bar"
import MainHeader from "../components/main-header"
import HeaderContainer from "../components/forum-scripts/forum-header-container"
import ForumLabelCard from "../components/forum-scripts/forum-label-card"
import NewQuestionButton from "../components/forum-scripts/new-question-button"
import MultipleQuestionContainer from "../components/forum-scripts/multiple-question-container"
import QuestionContainer from "../components/forum-scripts/question-container"
import Question from "../components/forum-scripts/question"
import KeywordLabelsContainer from "../components/forum-scripts/keyword-labels-container"


const sortingOptions = [
    {value: 'date-newest', label: 'Date (newest)'},
    {value: 'date-oldest', label: 'Date (oldest)'},
    {value: 'recent-activity', label: 'Recent activity'},
    {value: 'most-votes', label: 'Most votes'},
    {value: 'most-answers', label: 'Most answers'}
]

const filterOptions = [
    {value: 'keyword', label: 'Keyword'},
    {value: 'no-accepted-answer', label: 'No accepted answer'},
    {value: 'no-answers', label: 'No answers'}
]


const questions = [
    {
        questionId: 0,
        questionTitle: '1st Question',
        questionText: 'This is a first question and if you ask me it is not a very good question. And while this is quite entertaining, I am not fond of it. Further more I hope to embrace it or maybe not. Cheers and farewell, I hope to see you some other day.',
        keywords: ['javascript', 'jquery', 'ajax'],
        author: 'Antonio Josip Šolić',
        authorAvatar: '',
        timestamp: '2020-09-06T13:29:38.830Z',
        answerCounter: 7,
        voteCounter: {positive: 19, negative: 4, total: 15},
        viewCounter: 1300,
        hasAcceptedAnswer: true,
        lastActivityTimestamp: '2020-09-06T13:47:56.359Z',
    },
]

const totalQuestions = questions.length;

const Forum = () => (
    <Layout>
        {/* <Body sx={{ overflowY: "scroll", overflowX: "hidden" }} > */}
        <Body sx={{ overflowY: "scroll" }}>
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
                <MainHeader>
                    <BodyContentHeader
                        sx={{
                            height: "70%",
                            justifyContent: "space-between",
                            borderBottom: "1px solid",
                            borderColor: "iconGrey",
                            // backgroundColor: "transparent",
                        }}
                    >
                        <Styled.h3>Forum</Styled.h3>
                        <HeaderContainer>
                            <BodySearchBar currentPage="forum" sortingOptions={sortingOptions} filterOptions={filterOptions} />
                            <NewQuestionButton />
                        </HeaderContainer>
                    </BodyContentHeader>
                    <ForumLabelCard labelText="asked questions" labelValue={totalQuestions} />
                </MainHeader>
                <MultipleQuestionContainer>
                    {questions.map((question) => (
                        <QuestionContainer key={question.questionId} >
                            <Question question={question} />
                            <KeywordLabelsContainer keywords={question.keywords} />
                        </QuestionContainer>
                    ))}
                </MultipleQuestionContainer>
            </BodyContent>
            <SideBarForum />
        </Body>
    </Layout>
)

export default Forum