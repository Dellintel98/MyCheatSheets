/** @jsx jsx */
import { jsx } from "theme-ui"

const CreatorContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                width: "100%",
                height: "auto",
                // backgroundColor: "teal",
                borderBottom: "1px solid gray"
            }}

        />
    )
}

export default CreatorContainer