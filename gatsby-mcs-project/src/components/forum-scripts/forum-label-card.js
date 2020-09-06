/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const ForumLabelCard = ({labelText, labelValue, ...props}) => {
    return (
        <div
            {...props}
            sx={{
                // backgroundColor: "maroon",
                backgroundColor: "transparent",
                width: "100%",
                height: "28%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "left",
            }}
        >
            <Styled.p>{labelValue} {labelText}</Styled.p>
        </div>
    )
}

export default ForumLabelCard