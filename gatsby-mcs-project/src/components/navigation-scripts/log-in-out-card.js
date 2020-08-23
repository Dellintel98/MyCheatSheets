/** @jsx jsx */
import { Link } from "gatsby"
import {jsx} from "theme-ui"

const LogInOutCard = ({onclick, isUserLoggedIn}) => {
    const logInOutText = (!isUserLoggedIn) ? "Log in" : "Log out";

    return (
        <div 
            onClick={onclick}
            sx={{
                marginLeft: 1,
                px: 2,
                paddingTop: "3px",
                minWidth: "auto",
                minHeight: "navLinksHeight",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "3px solid white",
                color: "primary",
                text: "body",
                '&:hover': {
                    bg: 'backgroundGrey',
                    borderBottomColor: 'backgroundGrey',
                    color: "alternate",
                    cursor: "pointer",
                },
                userSelect: "none", /* supported by Chrome and Opera */
                webkitUserSelect: "none", /* Safari */
                khtmlUserSelect: "none", /* Konqueror HTML */
                mozUserSelect: "none", /* Firefox */
                msUserSelect: "none", /* Internet Explorer/Edge */
            }}
        >
            {logInOutText}
        </div>
    )
}

export default LogInOutCard