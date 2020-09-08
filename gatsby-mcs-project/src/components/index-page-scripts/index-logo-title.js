/** @jsx jsx */
import {jsx} from "theme-ui"


const LogoTitle = ({logoTitle}) => {

    return(
        <img
            src={logoTitle}
            alt="My Cheat Sheet logo"
            sx={{
                height: ["3%", null, "3.5%", "3.8%", "4%", "5.5%", null, null, null, "7%"],
                width: "auto",
                marginTop: "-16px",
                marginBottom: "8px",
            }}
        />
    )
}

export default LogoTitle