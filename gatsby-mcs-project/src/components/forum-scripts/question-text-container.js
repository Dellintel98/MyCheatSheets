/** @jsx jsx */
import { jsx } from "theme-ui"

const QuestionTextContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "flex-start",
                backgroundColor: "palegoldenrod",
                width: "65%",
                height: "100%",
                textAlign: "justify",
            }}
        />
    )
}

export default QuestionTextContainer