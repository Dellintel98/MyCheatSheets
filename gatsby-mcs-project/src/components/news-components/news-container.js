/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NewsContainer = props => {
    return (
        <Link to="news-article"
            {...props}
            sx={{
                display: "flex",
                width: "90%",
                height: "35%",
                maxWidth: "screenWidth",
                marginTop: "1em",
                marginLeft: "2.5em",
                //backgroundColor: "green",
            }}
        />
    )
}

export default NewsContainer