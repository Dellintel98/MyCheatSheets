/** @jsx jsx */
import { jsx } from "theme-ui"

const QuestionContainer = ({topMargin="1.65em", ...props}) => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                // backgroundColor: "midnightblue",
                backgroundColor: "transparent",
                width: "100%",
                height: "30%",
                minHeight: "30%",
                maxHeight: "30%",
                marginTop: topMargin,
            }}
        />
    )
}

export default QuestionContainer