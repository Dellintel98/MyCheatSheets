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
                backgroundColor: "transparent",
                // backgroundColor: "wheat",
                width: "65%",
                maxWidth: "65%",
                minWidth: "65%",
                height: "70%",
                textAlign: "justify",
                position: "relative",
            }}
        />
    )
}

export default QuestionTextContainer