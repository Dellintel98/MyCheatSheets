/** @jsx jsx */
import { jsx } from "theme-ui"
import Icon from "../icon"

const SideBarIcon = ({ iconSrc }) => {
    return (
        <Icon iconSrc={iconSrc} myHeight={"30px"} myPosition={"absolute"} myMx={3} />
    )
}
export default SideBarIcon