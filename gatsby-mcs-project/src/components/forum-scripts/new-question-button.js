/** @jsx jsx */
import { jsx } from "theme-ui"

const NewQuestionButton = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "primary",
                color: "white",
                width: "15%",
                height: "39%",
                borderRadius: "4px",
                cursor: "pointer",
                boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.25)",
                '&:hover': {
                    backgroundColor: "alternateHover",
                }
            }}
        >
            Ask question
        </div>
    )
}

export default NewQuestionButton