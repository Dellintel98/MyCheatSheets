/** @jsx jsx */
import { jsx } from "theme-ui"
import KeywordLabel from "./keyword-label"


const KeywordLabelsContainer = ({keywords}) => {
    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                // backgroundColor: "mintcream",
                backgroundColor: "transparent",
                width: "100%",
                height: "15%",
                minHeight: "15%",
                maxHeight: "15%",
                position: "relative",
                top: "8px",
            }}
        >
            {keywords.map((value, index) => (
                <KeywordLabel key={index} text={value} />
            ))}
        </div>
    )
}

export default KeywordLabelsContainer