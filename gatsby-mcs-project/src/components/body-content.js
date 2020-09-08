/** @jsx jsx */
import { jsx } from "theme-ui"

const BodyContent = props => {
    return (
        <div
            {...props}
            sx={{
                backgroundColor: "white",
                width: "81.6%",
                //minHeight: "100%",
                height: "auto",
            }}
        />
    )
}

export default BodyContent