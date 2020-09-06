/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NewsTextCard = props => {
    return (
        <Link to="../news-article"
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "flex-start",
                width: "60%",
                height: "100%",
                maxWidth: "screenWidth",
                // backgroundColor: "blue",
                color: "primary",
                marginLeft: "2em",
                marginRight: "2em",
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "justify",
            }}
        />
    )
}

export default NewsTextCard