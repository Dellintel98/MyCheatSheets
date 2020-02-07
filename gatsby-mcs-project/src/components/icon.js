/** @jsx jsx */
import { jsx } from "theme-ui"

const Icon = ({ iconSrc }) => {
    return (
        <div>
            <img
                src={iconSrc}
                alt="Icon"
                sx={{
                    maxHeight: "64px",
                    width: "auto",
                }}
            />
        </div>
    )
}
export default Icon