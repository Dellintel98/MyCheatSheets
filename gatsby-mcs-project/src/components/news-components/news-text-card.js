/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NewsTextCard = props => {
    return (
        <Link to="../news-article"
            {...props}
            sx={{
                display: "flex",
                width: "59.5%",
                height: "100%",
                maxWidth: "screenWidth",
                //backgroundColor: "blue",
                marginLeft: "0.2em",

            }}
        />
    )
}

export default NewsTextCard