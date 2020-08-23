/** @jsx jsx */
import {jsx} from "theme-ui"

const LoginContentContainer = ({bgrcolor, divHeight, ...props}) => {
    return (
        <div 
            {...props}
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: divHeight,
                backgroundColor: bgrcolor,
                alignItems: "center",
                justifyContent: "center",
            }}
        />
    )
}

export default LoginContentContainer