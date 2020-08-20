/** @jsx jsx */
import {jsx} from "theme-ui"

const LoginContent = props => {
    return (
        <div 
            {...props}
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "80%",
                backgroundColor: "background",
                borderRadius: "0 0 10px 10px",
                justifyContent: "center",
                alignItems: "center",
            }}
        />
    )
}

export default LoginContent