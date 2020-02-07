/** @jsx jsx */
import { jsx } from "theme-ui"
import Icon from "../icon"

const SideBarIcon = ({ iconSrc }) => {
    return (
        <Icon iconSrc={iconSrc}
            sx={{
                height: "navLogo",
            }}
        />
    )
}
export default SideBarIcon