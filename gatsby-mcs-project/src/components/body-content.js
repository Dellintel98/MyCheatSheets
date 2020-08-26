/** @jsx jsx */
import { jsx } from "theme-ui"

const BodyContent = props => {
    return (
        <div
            {...props}
            sx={{
                backgroundColor: "slateblue",
                width: "100%",
                //minHeight: "100%",
                height: "auto",
                
            }}
        />
    )
}

export default BodyContent