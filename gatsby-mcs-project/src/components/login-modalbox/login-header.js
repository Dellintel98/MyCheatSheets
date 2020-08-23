/** @jsx jsx */
import {jsx} from "theme-ui"

const LoginHeader = props => {
    return (
        <div 
            {...props}
            sx={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "20%",
                backgroundColor: "background",
            }}
        />
    )
}

export default LoginHeader