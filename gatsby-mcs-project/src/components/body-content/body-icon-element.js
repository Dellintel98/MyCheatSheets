/** @jsx jsx */
import { jsx } from "theme-ui"
import Icon from "../icon"

const BodyIconElement = ({ iconSrc }) => {
    return (
        <Icon iconSrc={iconSrc} myHeight={"50px"} myPosition={"relative"} myMx={3} />
    )
}
export default BodyIconElement