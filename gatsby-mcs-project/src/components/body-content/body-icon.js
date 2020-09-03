/** @jsx jsx */
import { jsx } from "theme-ui"
import Icon from "../icon"

const BodyIcon = ({ iconSrc }) => {
    return (
        <Icon iconSrc={iconSrc} myHeight={"30px"} myPosition={"relative"} myMx={3} />
    )
}
export default BodyIcon