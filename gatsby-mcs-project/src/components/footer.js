/** @jsx jsx */
import { jsx, Footer, Styled } from "theme-ui"
import { Link } from "gatsby"


const McsFooter = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
        <Footer
            sx={{
                maxHeight: "30px",
                height: "footerHeight",
                width: "screenWidth",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "fixed",
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
            <Styled.p
                sx={{
                    marginRight: "4px",
                    color: "white",
                }}
            >
                {currentYear} © My Cheat Sheets
            </Styled.p>
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