/** @jsx jsx */
import { jsx } from "theme-ui"

const QuestionLabelCard = ({labelText, labelValue}) => {
    return (
        <div
            sx={{
                // display: "flex",
                // flexDirection: "column",
                backgroundColor: "paleturquoise",
                width: "100%",
                height: "auto",
            }}
        >
            {labelText}
            <br />
            {labelValue}
        </div>
    )
}

export default QuestionLabelCard