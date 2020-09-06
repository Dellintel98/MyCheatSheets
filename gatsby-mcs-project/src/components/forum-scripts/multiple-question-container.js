/** @jsx jsx */
import { jsx } from "theme-ui"

const MultipleQuestionContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                // backgroundColor: "mediumaquamarine",
                backgroundColor: "transparent",
                width: "70%",
                height: "80%",
                minHeight: "80%",
                maxHeight: "80%",
            }}
        />
    )
}

export default MultipleQuestionContainer