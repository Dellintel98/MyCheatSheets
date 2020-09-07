/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import LinesEllipsis from "react-lines-ellipsis"
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"
import InformationContainer from "./info-container"
import QuestionLabelCard from "./question-label-card"
import QuestionTextContainer from "./question-text-container"
import QuestionAuthorContainer from "./forum-author-container"

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
const pStyled = Styled.p;

const Question = ({question, ...props}) => {
    const questionDate = new Date(question.timestamp);
    const dateString = questionDate.toLocaleDateString();
    const timeString = questionDate.toLocaleTimeString();
    const questionTime = dateString + " " + timeString;

    const viewsString = question.viewCounter + " views";

    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "transparent",
                width: "100%",
                height: "75%",
                minHeight: "75%",
                maxHeight: "75%",
                borderRadius: "5px",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <InformationContainer backgroundColor="primary" >
                <QuestionLabelCard labelText="Answers" labelValue={question.answerCounter} color="white" />
                <QuestionLabelCard labelText="Votes" labelValue={question.voteCounter.total} color="white" />
            </InformationContainer>
            <QuestionTextContainer>
                <Styled.h5 to="/forum-question" as={Link}
                    sx={{
                        marginBottom: "10px",
                        color: "alternate",
                        '&:hover': {
                            color: "alternateHover",
                        }
                    }}
                >{question.questionTitle}</Styled.h5>
                <ResponsiveEllipsis 
                    text={question.questionText}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                    component={pStyled}
                />
            </QuestionTextContainer>
            <InformationContainer containerWidth="17%" sx={{ paddingRight: "20px" }}>
                <QuestionAuthorContainer authorName={question.author} authorAvatar={question.authorAvatar} />
                <QuestionLabelCard labelValue={viewsString} fontsizeValue={2} color="primary" align="flex-end" />
                <QuestionLabelCard labelValue={questionTime} fontsizeValue={0} align="flex-end" color="primary" /> 
            </InformationContainer>
        </div>
    )
}

export default Question