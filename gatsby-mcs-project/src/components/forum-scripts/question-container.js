/** @jsx jsx */
import { jsx } from "theme-ui"

const QuestionContainer = ({margin="1em", ...props}) => {
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
                marginBottom: margin,
            }}
        />
    )
}

export default QuestionContainer