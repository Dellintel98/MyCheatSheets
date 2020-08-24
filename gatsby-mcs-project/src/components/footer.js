/** @jsx jsx */
import { jsx, Footer } from "theme-ui"
import { Link } from "gatsby"


const McsFooter = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <Footer
            sx={{
                maxHeight: "30px",
                height: "20px",
                width: "screenWidth",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 0,
                color: "white",
                backgroundColor: "primary",
                fontSize: 1,
                fontWeight: "subtitle",
                userSelect: "none", /* supported by Chrome and Opera */
                webkitUserSelect: "none", /* Safari */
                khtmlUserSelect: "none", /* Konqueror HTML */
                mozUserSelect: "none", /* Firefox */
                msUserSelect: "none", /* Internet Explorer/Edge */
            }}
        >
            <p sx={{ marginRight: "4px" }}>{currentYear} © My Cheat Sheets</p>
             • 
            <Link
                to="/about"
                sx={{
                    color: "white",
                    marginLeft: "4px",
                    '&:hover': {
                        color: "highlight2",
                    }
                }}
            >
                About
            </Link>
        </Footer>
    )
}

export default McsFooter