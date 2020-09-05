/** @jsx jsx */
import { jsx } from "theme-ui"

const NewQuestionButton = props => {
    return (
        <div
            {...props}
            sx={{
                backgroundColor: "lightsalmon",
                width: "17%",
                height: "50%",
            }}
        />
    )
}

export default NewQuestionButton