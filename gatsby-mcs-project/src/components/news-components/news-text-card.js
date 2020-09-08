/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NewsTextCard = ({onclick, ...props}) => {
    return (
        <Link to="../news-article"
            onClick={onclick}
            {...props}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "flex-start",
                width: "60%",
                height: "100%",
                // backgroundColor: "blue",
                color: "primary",
                marginLeft: "2em",
                marginRight: "2em",
            }}
        />
    )
}

export default NewsTextCard