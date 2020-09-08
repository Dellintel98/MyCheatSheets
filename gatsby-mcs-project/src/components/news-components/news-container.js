/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NewsContainer = props => {
    return (
        <Link to="news-article"
            {...props}
            sx={{
                display: "flex",
                flexFlow: "row",
                width: "80%",
                height: "auto",
                minHeight: "250px",
                maxWidth: "screenWidth",
                marginTop: "1em",
                marginBottom: "2em",
                // marginLeft: "2.5em",
                // backgroundColor: "green",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.25)",
                borderRadius: "5px",
                overflow: "hidden",
            }}
        />
    )
}

export default NewsContainer