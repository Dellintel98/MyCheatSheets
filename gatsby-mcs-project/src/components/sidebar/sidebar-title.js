/** @jsx jsx */
import { jsx } from "theme-ui"

const SideBarTitle = props => {
    return (
        <h3
            {...props}
            sx={{
                fontWeight: "heading",
                color: "primary",
                textAlign: "center",
            }}
        />
    )
}

export default SideBarTitle