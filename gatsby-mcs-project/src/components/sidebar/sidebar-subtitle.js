/** @jsx jsx */
import { jsx } from "theme-ui"

const SideBarSubtitle = props => {
    return (
        <h3
            {...props}
            sx={{
                // backgroundColor: "red",
                width: "100%",
                fontWeight: "subtitle",
                color: "primary",
                textAlign: "center",
                textEmphasisColor: "none",
                py: 1,
                alignSelf: "center",
                '&:hover': {
                    cursor: "default",
                },
                userSelect: "none", /* supported by Chrome and Opera */
                webkitUserSelect: "none", /* Safari */
                khtmlUserSelect: "none", /* Konqueror HTML */
                mozUserSelect: "none", /* Firefox */
                msUserSelect: "none", /* Internet Explorer/Edge */
            }}
        />
    )
}

export default SideBarSubtitle