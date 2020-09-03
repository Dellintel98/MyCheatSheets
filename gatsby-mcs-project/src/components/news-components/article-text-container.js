/** @jsx jsx */
import { jsx } from "theme-ui"

const ArticleTextContainer = props => {
    return (
        <div
            {...props}
            sx={{
                display: "flex",
                width: "60%",
                height: "auto",
                maxWidth: "screenWidth",
                //backgroundColor: "pink",
                marginLeft: "auto",
                marginRight: "auto",
                whiteSpace: "wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "justify",
            }}
        />
    )
}

export default ArticleTextContainer