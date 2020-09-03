/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NewsImageCard = props => {
    return (
        <Link to="../news-article"
            {...props}
            sx={{
                display: "flex",
                width: "40%",
                height: "100%",
                maxWidth: "screenWidth",
                // backgroundColor: "pink",
            }}
        />
    )
}

export default NewsImageCard