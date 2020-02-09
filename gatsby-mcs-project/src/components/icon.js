/** @jsx jsx */
import { jsx } from "theme-ui"

const Icon = ({ iconSrc, myHeight, myPosition, myMx }) => {
    return (
        <img
            src={iconSrc}
            alt="Icon"
            sx={{
                position: myPosition,
                mx: myMx,
                height: myHeight,
            }}
        />
    )
}
export default Icon