/** @jsx jsx */
import { jsx } from "theme-ui"

const BodyContentHeader = props => {
    return (

        < div
            {...props}
            sx={{
                height: "10%",
                width: "100%",
                // background: "pink",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
            }
            }>

        </div >
    )
}
export default BodyContentHeader