/** @jsx jsx */
import { jsx } from "theme-ui"

const BodyCategory = props => {
    return (
        <div
            {...props}
            sx={{
                background: "yellow",
                display: "flex",
                flexDirection: "row",
                width: "50%",
            }}>

        </div>
    )
}
export default BodyCategory