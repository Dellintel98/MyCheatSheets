/** @jsx jsx */
import { jsx } from "theme-ui"

const NewsIcon = ({ iconSrc }) => {
    return (
        <img
            src={iconSrc}
            alt="Icon"

            sx={{
                display: "flex",
                width: "100%",
                height: "100%",
            }}
        />
    )
}
export default NewsIcon