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
                backgroundColor: "white",
                width: "70%",
                height: "auto",
            }}
        />
    )
}

export default MultipleQuestionContainer