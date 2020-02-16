/** @jsx jsx */
import { Link } from "gatsby"
import {jsx} from "theme-ui"

const LogInOutCard = () => {
    return (
        <Link 
            to='/'
            sx={{
                mx: 1,
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
                  }
            }}
        >
            Log in
        </Link>
    )
}

export default LogInOutCard