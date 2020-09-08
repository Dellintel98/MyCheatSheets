/** @jsx jsx */
import { jsx } from "theme-ui"

const SideBarTitle = props => {
    return (
        <h3
            {...props}
            sx={{
                //backgroundColor: "lightgrey",
                width: "100%",
                fontWeight: "heading",
                color: "primary",
                textAlign: "center",
                textEmphasisColor: "none",
                py: 1,
                alignSelf: "center",
                boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
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

export default SideBarTitle