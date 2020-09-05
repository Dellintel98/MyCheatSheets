/** @jsx jsx */
import { jsx } from "theme-ui"
import InformationContainer from "./info-container"
import QuestionLabelCard from "./question-label-card"
import QuestionTextContainer from "./question-text-container"
import QuestionAuthorContainer from "./forum-author-container"

const Question = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "mistyrose",
                width: "100%",
                height: "80%",
                minHeight: "80%",
                maxHeight: "80%",
                
            }}
        >
            <InformationContainer>
                <QuestionLabelCard />
                <QuestionLabelCard />
                {/* <AnswerContainer /> */}
                {/* <VoteContainer /> */}
            </InformationContainer>
            <QuestionTextContainer>
                <h4>Question</h4>
                <p>This is the question text.</p>
            </QuestionTextContainer>
            <InformationContainer>
                <QuestionLabelCard />
                {/* <ViewContainer /> */}
                {/* ispod -> vrijeme kad je pitanje postavljeno */}
                <QuestionLabelCard /> 
                <QuestionAuthorContainer />
                {/* <AuthorContainer>
                    <AvatarContainer />
                    <CreatorName />
                </AuthorContainer> */}
            </InformationContainer>
        </div>
    )
}

export default Question