/** @jsx jsx */
import {jsx} from "theme-ui"
import Container from "../container"


const QuickAccessIconContainer = ({...props}) => {

    return(
        <Container
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                height: "30%",
                width: ["60%", null, "100%", null, "80%", "70%", "60%", null, "70%", null, "58.5%"],
                alignItems: ["center", null, null, "flex-start"],
                justifyContent: "center",
                flexWrap: ["wrap", null, null, null, null, null, null, null, null, null, "nowrap"],
            }}
        />
    )
}

export default QuickAccessIconContainer