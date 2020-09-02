/** @jsx jsx */
import { jsx } from "theme-ui"


const NewsArticleContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                maxWidth: "screenWidth",
                backgroundColor: "blue",
                justifyContent: "left",
            }}
        />
    )
}

export default NewsArticleContainer