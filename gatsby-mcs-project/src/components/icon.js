/** @jsx jsx */
import { jsx } from "theme-ui"

const Icon = ({ iconSrc }) => {
    return (
        <img
            src={iconSrc}
            alt="Icon"
            sx={{
                maxHeight: "64px",
                width: "auto",
            }}
        />
    )
}
export default Icon