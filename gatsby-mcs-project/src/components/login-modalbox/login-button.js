/** @jsx jsx */
import {jsx} from "theme-ui"
import { Link } from "gatsby"

const LoginButton = ({buttonImage, buttonName}) => {
    return (
        <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
                <img
                    src={buttonImage}
                    alt={buttonName}
                    sx={{
                        height: "navLogo",
                        maxHeight: "40px",
                        width: "auto",
                        px: 1,
                    }}
                />
        </Link>
        // <div
        //     sx={{
        //         width: "20%",
        //         height: "20%",
        //         color: "background",
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         backgroundColor: `rgba(20, 23, 41, 1)`,
        //         '&:hover': {
        //             backgroundColor: `rgba(20, 23, 41, 0.8)`,
        //         }
        //     }}
        // >
            
        // </div>
    )
}

export default LoginButton