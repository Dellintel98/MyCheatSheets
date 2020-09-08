/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const QuestionLabelCard = ({labelText, labelValue, fontsizeText=2, fontsizeValue=3, color, align="center", leftMargin="0px"}) => {
    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: align,
                justifyContent: "center",
                backgroundColor: "paleturquoise",
                backgroundColor: "transparent",
                width: "100%",
                height: "auto",
                color: color,
                marginLeft: leftMargin,
            }}
        >
            <Styled.p sx={{color: color, fontSize: fontsizeText}} >{labelText}</Styled.p>
            <Styled.p sx={{color: color, fontSize: fontsizeValue}} >{labelValue}</Styled.p>
        </div>
    )
}

export default QuestionLabelCard