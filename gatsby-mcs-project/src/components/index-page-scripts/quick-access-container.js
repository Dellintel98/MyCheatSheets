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
                // backgroundColor: "slateblue",
                height: "30%",
                alignItems: "flex-start",
                justifyContent: "center",
            }}
        />
    )
}

export default QuickAccessIconContainer