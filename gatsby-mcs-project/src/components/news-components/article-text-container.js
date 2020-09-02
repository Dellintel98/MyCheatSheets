/** @jsx jsx */
import { jsx } from "theme-ui"

const ArticleTextContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                width: "90%",
                height: "auto",
                maxWidth: "screenWidth",
                //backgroundColor: "pink",
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

export default ArticleTextContainer