/** @jsx jsx */
import {jsx} from "theme-ui"


const LogoTitle = ({logoTitle}) => {

    return(
        <img
            src={logoTitle}
            alt="My Cheat Sheet logo"
            sx={{
                height: "7%",
                // maxHeight: "38px",
                width: "auto",
                marginTop: "-16px",
                marginBottom: "8px",
            }}
        />
    )
}

export default LogoTitle