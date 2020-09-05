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
                backgroundColor: "mediumaquamarine",
                width: "70%",
                height: "80%",
                minHeight: "80%",
                maxHeight: "80%",
                overflowX: "hidden",
                overflowY: "scroll",
            }}
        />
    )
}

export default MultipleQuestionContainer