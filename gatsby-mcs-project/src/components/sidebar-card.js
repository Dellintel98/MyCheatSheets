/** @jsx jsx */
import { jsx } from "theme-ui"

const Card = props => {
    return (
        <div
            {...props}
            sx={{
                width: "30px",
                height: "30px",
                backgroundColor: "tomato",
            }}
        />
    )
}
export default Card