/** @jsx jsx */
import { jsx } from "theme-ui"

const KeywordLabelsContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "mintcream",
                width: "100%",
                height: "15%",
                minHeight: "15%",
                maxHeight: "15%",
            }}
        />
    )
}

export default KeywordLabelsContainer