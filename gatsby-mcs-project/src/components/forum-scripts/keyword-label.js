/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const KeywordLabel = ({text}) => {
    return (
        <div
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "alternate",
                width: "auto",
                height: "100%",
                px: "1em",
                marginRight: "0.8em",
                cursor: "pointer",
                borderRadius: "4px",
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.25)",
                '&:hover': {
                    backgroundColor: "alternateHover",
                }
            }}
        >
            <Styled.p sx={{ color: "white", fontSize: 0 }} >{text}</Styled.p>
        </div>
    )
}

export default KeywordLabel