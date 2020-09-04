/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NewsContainer = props => {
    return (
        <Link to="news-article"
            {...props}
            sx={{
                display: "flex",
                width: "80%",
                height: "35%",
                maxWidth: "screenWidth",
                marginTop: "1em",
                marginBottom: "2em",
                // marginLeft: "2.5em",
                // backgroundColor: "green",
                boxShadow: "5px 5px 10px rgba(0,0,0,0.6)",
                borderRadius: "5px",
                overflow: "hidden",

            }}
        />
    )
}

export default NewsContainer